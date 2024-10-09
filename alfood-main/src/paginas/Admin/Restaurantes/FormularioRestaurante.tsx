import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IRestaurante from "../../../interfaces/IRestaurante"
import http from "../../../http"

const FromularioRestaurante = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(res => setNomeRestaurante(res.data.nome))
        }
    }, [parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmeter = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, { nome: nomeRestaurante })
                .then(() => {
                    alert('restaurante atualizado com sucesso')
                })
        } else {
            http.post('restaurantes/', { nome: nomeRestaurante })
                .then(() => {
                    alert('restaurante adicionado com sucesso')
                })
        }
    }

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component='h1' variant="h6">Formulário de Restaurantes</Typography>
            <Box component='form' width='100%' onSubmit={aoSubmeter}>
                <TextField
                    value={nomeRestaurante}
                    onChange={evt => setNomeRestaurante(evt.target.value)}
                    label="Nome do restaurante"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button
                    sx={{ marginTop: 1 }}
                    type="submit"
                    variant="outlined"
                    fullWidth
                >
                    Adicionar restaurante
                </Button>
            </Box>
        </Box>

    )
}

export default FromularioRestaurante