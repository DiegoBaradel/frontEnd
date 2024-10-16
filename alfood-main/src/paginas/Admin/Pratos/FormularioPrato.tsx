import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import ITag from "../../../interfaces/ITag"
import IRestaurante from "../../../interfaces/IRestaurante"
import { useParams } from "react-router-dom"
import IPrato from "../../../interfaces/IPrato"

const FromularioPrato = () => {

    const parametro = useParams()

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')

    const [tag, setTag] = useState('')
    const [restaurante, setRestaurante] = useState('')

    const [imagem, setImagem] = useState<File|null>(null)

    const [tags, setTags] = useState<ITag[]>([])
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])


    useEffect(()=>{
        http.get<{tags: ITag[]}>('tags/')
        .then(res=>{setTags(res.data.tags)})
        http.get<IRestaurante[]>('restaurantes/')
        .then(res=>{setRestaurantes(res.data)})

        if (parametro.id) {
            http.get<IPrato>(`pratos/${parametro.id}/`)
                .then(res => {
                    setNomePrato(res.data.nome)
                    setDescricao(res.data.descricao)
                    setTag(res.data.tag)
                    setRestaurante(res.data.restaurante.toString())
                    if (imagem) {
                        setImagem(JSON.parse(res.data.imagem))
                    }
                })
        }
    },[parametro])

    const aoSubmeter = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        const formData = new FormData()
        formData.append('nome', nomePrato)
        formData.append('descricao', descricao)
        formData.append('tag', tag)
        formData.append('restaurante', restaurante)

        if (imagem) {
            formData.append('imagem', imagem)
        }
        if (parametro.id) {
            
    
            http.request({
                url: `pratos/${parametro.id}/`,
                method: 'PUT',
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            })
            .then(()=>alert('Prato atualizado com sucesso!!!'))
            .catch(erro=>console.log(erro))


        } else {
            
    
            http.request({
                url: 'pratos/',
                method: 'POST',
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            })
            .then(()=>alert('Prato cadestrado com sucesso!!!'))
            .catch(erro=>console.log(erro))
        }

    }

    const selecionarArquivo= (evt: React.ChangeEvent<HTMLInputElement>) =>{
        if (evt.target.files?.length) {
            setImagem(evt.target.files[0])
        } else {
            setImagem(null)
        }
    }

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component='h1' variant="h6">Formulário de Pratos</Typography>
            <Box component='form' width='100%' onSubmit={aoSubmeter}>
                <TextField
                    value={nomePrato}
                    onChange={evt => setNomePrato(evt.target.value)}
                    label="Nome do prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={descricao}
                    onChange={evt => setDescricao(evt.target.value)}
                    label="Descrição do prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />

                <FormControl
                    margin="dense"
                    fullWidth
                >
                    <InputLabel id='select-tag' >Tag</InputLabel>
                    <Select labelId="select-tag" value={tag} onChange={(evt)=>setTag(evt.target.value)}>
                        {tags.map(tag=><MenuItem key={tag.id} value={tag.value}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>

                </FormControl>
                <FormControl
                    margin="dense"
                    fullWidth
                >
                    <InputLabel id='select-restaurante' >Restaurante</InputLabel>
                    <Select labelId="select-restaurante" value={restaurante} onChange={(evt)=>setRestaurante(evt.target.value)}>
                        {restaurantes.map(restaurante=><MenuItem key={restaurante.id} value={restaurante.id}>
                            {restaurante.nome}
                        </MenuItem>)}
                    </Select>

                </FormControl>

                <input type="file" onChange={selecionarArquivo}/>

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

export default FromularioPrato