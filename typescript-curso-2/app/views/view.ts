import { inspct } from "../decoreitors/inspct.js";

export abstract class View<Type> {

    protected elemento : HTMLElement;

    constructor(seletor: string){

        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLInputElement
        }
        else{
            throw Error(`Seletro ${seletor} não esta definido`)
        }
        
    }
        
    protected abstract templeite(mensagem: Type): string


    @inspct()
    update(mensagem: Type): void{
        
        this.elemento.innerHTML = this.templeite(mensagem)
        
    }

}