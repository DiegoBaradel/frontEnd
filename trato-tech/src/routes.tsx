import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./components/PaginaPadrao"
import Home from "./pages/Home"
import Categoria from "./pages/Categoria"
import Carrinho from "./pages/Carrinho"

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />}/>
                    <Route path="/categoria/:nomeCategoria" element={<Categoria />}/>
                    <Route path="Carrinho" element={<Carrinho />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router