import Banner from "../../components/banner"
import ListaCard from "../../components/listaCards"
import Titulo from "../../components/titulo"


const Inicio = () =>{
    return(
        <>
            <Banner url='Home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section>
                <ListaCard />
            </section>
        </>
    )
}

export default Inicio