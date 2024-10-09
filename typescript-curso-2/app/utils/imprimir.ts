import { imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: imprimivel[]) {
    for (let elemento of objetos) {
        console.log(elemento.paraTexto())
        
    }
}