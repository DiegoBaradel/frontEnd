import { useRecoilValue } from "recoil"
import { mensagemDeErro } from "../atom"

export const useMensagemDeErro =()=>{

    const mensagem = useRecoilValue(mensagemDeErro)
    return mensagem
}