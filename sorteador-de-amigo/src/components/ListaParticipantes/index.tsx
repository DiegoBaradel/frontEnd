import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import ListaParticipantesStyle from "./ListaParticipantes.Style"

const ListaParticipantes = ()=>{

    const participantes:string[] = useListaDeParticipantes()
    return(
        <ul>
            {participantes.map(participante=><ListaParticipantesStyle key={participante}>{participante}</ListaParticipantesStyle>)}
        </ul>
    )
}

export default ListaParticipantes