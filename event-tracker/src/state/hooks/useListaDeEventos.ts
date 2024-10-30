import { useRecoilValue } from "recoil"
import { listaDeEventosState } from "../Atom"
import { eventosFiltradosState } from "../seletores"

const useListaDeEventos =()=>{
    return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos