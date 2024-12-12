import api from './api.js'
import ui from './ui.js'

document.addEventListener('DOMContentLoaded', ()=>{
    ui.renderizarPensamentos()

    const formularioPensamentos = document.querySelector('#pensamento-form')
    const btnCancelar = document.querySelector('#botao-cancelar')
    
    formularioPensamentos.addEventListener('submit', aoSubmeterFormulario)
    btnCancelar.addEventListener('click', aoCancelar)
})

async function aoSubmeterFormulario(evt) {
    evt.preventDefault()
    const conteudo = document.querySelector('#pensamento-conteudo').value
    const autoria = document.querySelector('#pensamento-autoria').value

    try {
        await api.salvarPensamento({conteudo, autoria})
        ui.renderizarPensamentos()
    } catch (error) {
        alert('Erro ao salvar pensamento')
    }
}

function aoCancelar(){
    ui.liparCompos()
}