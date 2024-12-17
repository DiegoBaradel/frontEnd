import api from './api.js'
import ui from './ui.js'

const regexConteudo = /^[A-Za-z\s]{10,}$/
const regexAutoria = /^[A-Za-z]{3,15}$/

const pensamentosSet = new Set()

async function adicionerChaveAoPensamento(){
    try {
        const pensamentos = await api.buscarPensamentos()
        pensamentos.forEach(pensamento => {
            const chavePensmento = `${pensamento.conteudo.trim().toLowerCase()}-${pensamento.autoria.trim().toLowerCase()}`
            pensamentosSet.add(chavePensmento)
        })
    } catch (error) {
        alert('Erro ao adicionar chave do pensamento')
        throw error
    }
}

function validarInput(regra, conteudo){
    return regra.test(conteudo)
}

function removerEspacos(string) {
    return string.replaceAll(/\s+/g, '')
}

document.addEventListener('DOMContentLoaded', ()=>{
    ui.renderizarPensamentos()
    adicionerChaveAoPensamento()

    const formularioPensamentos = document.querySelector('#pensamento-form')
    const btnCancelar = document.querySelector('#botao-cancelar')
    const inputBusca = document.querySelector('#campo-busca')

    formularioPensamentos.addEventListener('submit', aoSubmeterFormulario)
    btnCancelar.addEventListener('click', aoCancelar)
    inputBusca.addEventListener('input', aoBuscar)
})

async function aoSubmeterFormulario(evt) {
    evt.preventDefault()
    const conteudo = document.querySelector('#pensamento-conteudo').value
    const autoria = document.querySelector('#pensamento-autoria').value
    const id = document.querySelector('#pensamento-id').value
    const data = document.querySelector('#pensamento-data').value

    const conteudoSemEspaco = removerEspacos(conteudo)
    const chaveNovoPensamento = `${conteudo.trim().toLowerCase()}-${autoria.trim().toLowerCase()}`

    if (!validarInput(regexConteudo, conteudoSemEspaco)||!validarInput(regexAutoria, autoria)) {
        alert('campo invalido')
        return
    }

    if (validarData(data)) {
        alert('Data invalida')
        return
    }

    if (pensamentosSet.has(chaveNovoPensamento)) {
        alert('O pensamento já existe')
        return
    }else{
        pensamentosSet.add(chaveNovoPensamento)
    }

    try {
        if (id) {
            await api.editarPensamento({conteudo, autoria, id, data})
        }else{
            await api.salvarPensamento({conteudo, autoria, data})
        }
        ui.renderizarPensamentos()
    } catch (error) {
        alert('Erro ao salvar pensamento')
    }
}

function aoCancelar(){
    ui.liparCampos()
}

async function aoBuscar() {
    const busca = document.querySelector('#campo-busca').value

    try {
        const buscaFiltrada = await api.filtrarPensamentos(busca)
        ui.renderizarPensamentos(buscaFiltrada)
    } catch (error) {
        alert('Erro ao filtrar pensamentos')
    }
}

function validarData(data) {
    const dataAtual = new Date()
    const dataFormulario = new Date(data)
    return dataAtual < dataFormulario
}