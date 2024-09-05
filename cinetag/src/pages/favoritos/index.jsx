import Banner from "../../components/banner"
import ListaCard from "../../components/listaCards"
import Titulo from "../../components/titulo"

const Favoritos = ()=>{
    return(
        <>
            <Banner url='Favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section>
                <ListaCard />
            </section>
        </>
    )
}

export default Favoritos