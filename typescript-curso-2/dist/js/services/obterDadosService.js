import { Negociacao } from "../models/negociacao";
export class obiterDadosService {
    obiterDados() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date, dado.vezes, dado.montante);
            });
        });
    }
}
