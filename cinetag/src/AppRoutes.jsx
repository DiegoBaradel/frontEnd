import Favoritos from "./pages/favoritos"
import Inicio from "./pages/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Player from "./pages/player"
import PaginaNaoEncontrada from "./pages/paginaNaoEncontrada"
import PaginaBase from "./pages/paginaBase"
import Cabecalho from "./components/cabecalho"
import Container from "./components/container"
import RodaPe from "./components/rodaPe"
import FavoritoProvider from "./contextos/favoritoContexto/Favoritos"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <FavoritoProvider>
                <Container>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<PaginaNaoEncontrada />}></Route>
                    </Routes>
                </Container>
            </FavoritoProvider>
            <RodaPe />
        </BrowserRouter>
    )
}

export default AppRoutes