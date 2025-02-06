import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoMago
    ladoArqueiro
    tipo = 'ArqueiroMago'

    constructor (nome, level, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome, level)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza)
        this,this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}