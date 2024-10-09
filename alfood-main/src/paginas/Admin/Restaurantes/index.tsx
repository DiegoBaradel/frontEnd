import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { Paper, TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { Link } from "react-router-dom"
import http from "../../../http"

const AdiminRestaurantes = () => {


    useEffect(() => {
        http.get<IRestaurante[]>('restaurantes/')
            .then(res => setRestaurantes(res.data))
    }, [])

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    const aoExcluir =(excluirRestaurante: IRestaurante)=>{
            http.delete<IRestaurante>(`restaurantes/${excluirRestaurante.id}/`)
                .then(()=>{
                    const novoRestaurante = restaurantes.filter(restaurante=>restaurante.id!==excluirRestaurante.id)
                    setRestaurantes([...novoRestaurante])
                })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            nome
                        </TableCell>
                        <TableCell>
                            editar
                        </TableCell>
                        <TableCell>
                            excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante =>(
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                <Link to={`/adimin/restaurantes/${restaurante.id}`}>[edit]</Link>
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={()=>aoExcluir(restaurante)}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default AdiminRestaurantes