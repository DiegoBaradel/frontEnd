const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia')

const verificarListaVazia = (lista)=>{
    const listaVazia = lista.querySelectorAll('li')
    if (listaVazia.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia