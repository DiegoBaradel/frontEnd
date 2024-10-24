import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../Atom"
import { obterId } from "../../utils/id"
import { error } from "console"

const useAdicionarEvento = ()=>{
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento:IEvento)=>{
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error('Eventos não podem ser cadastrados com data menor que o dia atual')
        }
        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento