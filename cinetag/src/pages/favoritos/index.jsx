import Banner from "../../components/banner"
import Lista from "../../components/lista"
import Titulo from "../../components/titulo"
import { useFavotiroContexto } from "../../contextos/favoritoContexto/Favoritos"

const Favoritos = ()=>{
    const {favorito} = useFavotiroContexto()
    return(
        <>
            <Banner url='Favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section>
                <Lista
                    type={favorito?favorito:[]}
                />
            </section>
        </>
    )
}

export default Favoritos