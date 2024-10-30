import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import RodapeStyle from "./Rodape.Style"

const Rodape = ()=>{

    const participantes = useListaDeParticipantes()

    const navegacao = useNavigate()

    const iniciar =()=>{
        navegacao('/sorteio')
    }

    return(
        <RodapeStyle>
            <button 
                onClick={iniciar}
                disabled={participantes.length<3}
            >
                Iniciar Brincadeira
            </button>
            <img src="./imagens/sacolas.png" alt="imagem de sacolas de presentes" />
        </RodapeStyle>
    )
}

export default Rodape