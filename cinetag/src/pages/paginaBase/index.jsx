import { Outlet } from "react-router-dom"
import Cabecalho from  '../../components/cabecalho'
import Container from '../../components/container'
import RodaPe from '../../components/rodaPe'
import FavoritoProvider from "../../contextos/favoritoContexto/Favoritos"


const PaginaBase = () =>{
    return (
        <main>
            <Cabecalho />
                <FavoritoProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritoProvider>
            <RodaPe />
        </main>
    )
}

export default PaginaBase