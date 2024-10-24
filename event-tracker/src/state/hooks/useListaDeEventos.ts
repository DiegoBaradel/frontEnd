import { useRecoilValue } from "recoil"
import { listaDeEventosState } from "../Atom"

const useListaDeEventos =()=>{
    return useRecoilValue(listaDeEventosState)
}

export default useListaDeEventos