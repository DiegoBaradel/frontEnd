import { useRecoilValue } from "recoil"
import { listaParticipantes } from "../atom"

export const useListaDeParticipantes = ()=>{
    return useRecoilValue(listaParticipantes)
}