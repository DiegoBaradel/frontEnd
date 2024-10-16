import { useEffect, useState } from "react"
import { Paper, TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { Link } from "react-router-dom"
import http from "../../../http"
import IPrato from "../../../interfaces/IPrato"

const AdiminPratos = () => {


    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(res => setPratos(res.data))
    }, [])

    const [pratos, setPratos] = useState<IPrato[]>([])

    const aoExcluir =(excluirPrato: IPrato)=>{
            http.delete<IPrato>(`pratos/${excluirPrato.id}/`)
                .then(()=>{
                    const novoPrato = pratos.filter(parto=>parto.id!==excluirPrato.id)
                    setPratos([...novoPrato])
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
                            tag
                        </TableCell>
                        <TableCell>
                            imagem
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
                    {pratos.map(prato =>(
                        <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                [<a href={prato.imagem} target="_blank" rel="noreferrer">ver imagem</a>]
                            </TableCell>
                            <TableCell>
                                <Link to={`/admin/pratos/${prato.id}`}>[edit]</Link>
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={()=>aoExcluir(prato)}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default AdiminPratos