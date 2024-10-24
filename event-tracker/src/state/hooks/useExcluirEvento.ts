import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../Atom"

const useExcluirEvento =()=>{

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return (evento:IEvento)=>{
        return setListaDeEventos(listaAntiga => listaAntiga.filter(evt => evt.id !== evento.id))
    }
}

export default useExcluirEvento