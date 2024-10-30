import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaParticipantes, mensagemDeErro } from "../atom"

export const useAdicionarParticipante = ()=>{
    const setLista = useSetRecoilState(listaParticipantes)
    const lista = useRecoilValue(listaParticipantes)
    const setMensagemDeErro = useSetRecoilState(mensagemDeErro)
    return (nomeParticipante: string)=>{

        if (lista.includes(nomeParticipante)) {
            setMensagemDeErro('Nomes duplicados não são permitidos!')
            setTimeout(()=>{
                setMensagemDeErro('')
            },3000)
            return 
        }

        return setLista( listaAtual => [...listaAtual, nomeParticipante])
    }
}