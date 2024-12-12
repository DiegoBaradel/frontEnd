import api from './api.js'

const ui = {
    async renderizarPensamentos(){

        try {
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(ui.adicionarPensamentoNaLista)
        } catch (error) {
            alert('Erro ao renderiza pensamentos')
        }
    },

    adicionarPensamentoNaLista(pensamento){
        const listaPensamentos = document.querySelector('#lista-pensamentos')
        const li = document.createElement('li')
        li.setAttribute('data-id', pensamento.id)
        li.classList.add('li-pensamento')

        const iconeAspas = document.createElement('img')
        iconeAspas.src = 'assets/imagens/aspas-azuis.png'
        iconeAspas.alt = 'Aspas azuis'
        iconeAspas.classList.add('icone-aspas')

        const divConteudo = document.createElement('div')
        divConteudo.classList.add('pensamento-conteudo')
        divConteudo.textContent = pensamento.conteudo

        const divAutor = document.createElement('div')
        divAutor.classList.add('pensamento-autor')
        divAutor.textContent = pensamento.autoria

        li.appendChild(iconeAspas)
        li.appendChild(divConteudo)
        li.appendChild(divAutor)

        listaPensamentos.appendChild(li)
    },

    liparCompos(){
        document.getElementById("pensamento-form").reset();
    }

}

export default ui