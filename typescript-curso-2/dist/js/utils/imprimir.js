export function imprimir(...objetos) {
    for (let elemento of objetos) {
        console.log(elemento.paraTexto());
    }
}
