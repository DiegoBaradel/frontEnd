import Card from "../components/Card"
import Formulario from "../components/Formulario"
import ListaParticipantes from "../components/ListaParticipantes"
import Rodape from "../components/Rodape"


const Configuracao = ()=>{
    return(
        <Card>
            <h2>Vamos começar!</h2>
            <Formulario />
            <ListaParticipantes />
            <Rodape />
        </ Card>
    )
}

export default Configuracao