import api from './api.js'

const ui = {
    renderizerSemPensamentos(){
        const listaPensamentos = document.querySelector('#lista-pensamentos')
        const divListaVazia = document.createElement('div')
        divListaVazia.classList.add('lista-vazia')

        const paragrafo = document.createElement('p')
        paragrafo.innerHTML = 'Nada por aqui ainda, que tal compartilhar alguma ideia?'
        
        const imagem = document.createElement('img')
        imagem.src = 'assets/imagens/lista-vazia.png'
        imagem.alt = 'gaveta vazia'

        divListaVazia.appendChild(paragrafo)
        divListaVazia.appendChild(imagem)

        listaPensamentos.appendChild(divListaVazia)
    },

    async preemcharFormulario(pensamentoId){
        const pensamento = await api.buscarPensamentoPorId(pensamentoId)
        document.querySelector('#pensamento-id').value = pensamento.id
        document.querySelector('#pensamento-conteudo').value = pensamento.conteudo
        document.querySelector('#pensamento-autoria').value = pensamento.autoria
    },

    async renderizarPensamentos(){
        const listaPensamentos = document.querySelector('#lista-pensamentos')
        listaPensamentos.innerHTML = ''
        try {
            const pensamentos = await api.buscarPensamentos()
            if (pensamentos.length === 0) {
                ui.renderizerSemPensamentos()
            } else {
                pensamentos.forEach(ui.adicionarPensamentoNaLista)
            }
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

        const botaoEditar = document.createElement('button')
        botaoEditar.classList.add('botao-editar')
        botaoEditar.onclick = () => ui.preemcharFormulario(pensamento.id)

        const botaoExcliuir = document.createElement('button')
        botaoExcliuir.classList.add('botao-excluir')
        botaoExcliuir.onclick = async () => {
            try {
                await api.deleterPensamento(pensamento.id)
                ui.renderizarPensamentos()
            } catch (error) {
                alert('Erro ao excluir pensamento')
            }
        }

        const iconeEditar = document.createElement('img')
        iconeEditar.src = 'assets/imagens/icone-editar.png'
        iconeEditar.alt = 'Editar'
        botaoEditar.appendChild(iconeEditar)

        const iconeExcluir = document.createElement('img')
        iconeExcluir.src = 'assets/imagens/icone-excluir.png'
        iconeExcluir.alt = 'Excluir'
        botaoExcliuir.appendChild(iconeExcluir)

        const icones = document.createElement('div')
        icones.classList.add('icones')
        icones.appendChild(botaoEditar)
        icones.appendChild(botaoExcliuir)

        li.appendChild(iconeAspas)
        li.appendChild(divConteudo)
        li.appendChild(divAutor)
        li.appendChild(icones)

        listaPensamentos.appendChild(li)
    },

    liparCompos(){
        document.getElementById("pensamento-form").reset();
    }

}

export default ui