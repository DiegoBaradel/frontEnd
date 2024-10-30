import { useState } from "react"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio"
import Card from "../components/Card"

const Sorteio = ()=>{

    const participantes = useListaDeParticipantes()

    const [participanteDaVez , setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    
    const resultado = useResultadoDoSorteio()

    const sortear = (evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return(
        <Card>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select 
                    required 
                    name="participanteDaVez" 
                    id="participanteDaVez" 
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option> Selecione seu nome</option>
                    { participantes.map(participante=> <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className="btn__sorte">Sortear</button>
            </form>
            {amigoSecreto && <p className="alerta" role="alert">{amigoSecreto}</p>}
            <footer>
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </Card>
    )
}

export default Sorteio