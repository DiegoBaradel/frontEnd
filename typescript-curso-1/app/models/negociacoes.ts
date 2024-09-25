import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao): void{
        this.negociacoes.push(negociacao)
    }

    list(): readonly Negociacao[]{
        return this.negociacoes
    }
};