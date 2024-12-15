import api from './api.js'
import ui from './ui.js'

document.addEventListener('DOMContentLoaded', ()=>{
    ui.renderizarPensamentos()

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

    try {
        if (id) {
            await api.editarPensamento({conteudo, autoria, id})
        }else{
            await api.salvarPensamento({conteudo, autoria})
        }
        ui.renderizarPensamentos()
    } catch (error) {
        alert('Erro ao salvar pensamento')
    }
}

function aoCancelar(){
    ui.liparCompos()
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