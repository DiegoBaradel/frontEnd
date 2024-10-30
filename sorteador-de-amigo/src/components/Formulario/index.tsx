import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro"
import FormularioStyle from "./Formulario.Style"

const Formulario = () => {

    const [nome, setNome] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const adicionarNaLista = useAdicionarParticipante()
    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante =(evt:React.FormEvent<HTMLFormElement>)=>{
        evt.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }


    return(
        <FormularioStyle onSubmit={adicionarParticipante}>
            <div>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evt=>setNome(evt.target.value)} 
                    type="text" 
                    placeholder="Insira os nomes dos participantes" 
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </FormularioStyle>
    )
}

export default Formulario