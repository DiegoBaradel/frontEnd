import Favoritos from "./pages/favoritos"
import Inicio from "./pages/Inicio"
import Cabecalho from './components/cabecalho'
import RodaPe from './components/rodaPe'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "./components/container"
import FavoritoProvider from "./contextos/favoritoContexto/Favoritos"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritoProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Routes>
                </FavoritoProvider>
            </Container>
            <RodaPe />
        </BrowserRouter>
    )
}

export default AppRoutes