import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoMago
    ladoArqueiro
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lancas e flechas mágicas!'

    constructor (nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this,this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}