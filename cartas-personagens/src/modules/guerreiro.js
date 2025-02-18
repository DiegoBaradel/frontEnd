import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    forca 

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }

    obterInsignia(){
        if (this.forca >= 5 && this.level >= 7) {
            return "Guerreiro furioso"
        }
        return super.obterInsignia()
    }
}