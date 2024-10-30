import { atom } from "recoil";

export const listaParticipantes = atom<string[]>({
    key: 'listaParticipantes',
    default: []
})

export const mensagemDeErro = atom<string>({
    key:'mensagemDeErro',
    default:''
})