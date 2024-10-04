import { negociacaoDoDia } from "../interfaces/interfaceDeDados"
import { Negociacao } from "../models/negociacao"

export class obiterDadosService{

    obiterDados(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res=>res.json())
            .then((dados: negociacaoDoDia[])=>{
                return dados.map(dado =>{
                    return new Negociacao(new Date, dado.vezes, dado.montante)
                })
            })
    }
}