import Banner from "../../components/banner"
import Lista from "../../components/lista"
import Titulo from "../../components/titulo"
import Cards from '../../json/db.json'

const Inicio = () =>{
    return(
        <>
            <Banner url='Home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section>
                <Lista
                    type={Cards}
                />
            </section>
        </>
    )
}

export default Inicio