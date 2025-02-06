const listaDeItens = []

import {criarItemLista} from './scripts/criarItemLista.js'
import { criarHoraDoItem } from "./scripts/criarHoraDoItem.js"
import verificarListaVazia from './scripts/verificarListaVazia.js'

const item = document.querySelector('#input-item')
const lista = document.querySelector('#lista-de-compras')
const btnAdicionarItem = document.querySelector('#adicionar-item')

btnAdicionarItem.addEventListener('click', (evt)=>{
    evt.preventDefault()

    const itemDuplicado = listaDeItens.some(elemento => elemento.valor.toUpperCase() === item.value.toUpperCase())

    if (itemDuplicado) {
        alert('O item já existe na lista')   
    } else {
        listaDeItens.push({valor:item.value ,checked: false, data:criarHoraDoItem()})
    }

    
    //const itemDaLista = criarItemLista()

    //lista.appendChild(itemDaLista)

    mostrarItens()

    verificarListaVazia(lista)
})

verificarListaVazia(lista)

const mostrarItens = ()=>{
    lista.innerHTML = ''
    listaDeItens.forEach((item, index) =>{
        lista.innerHTML += `<li>
                                <div class="lista-item-container">
                                    <input type="checkbox" id="checkbox-${index}">
                                    <p>${item.valor}</p>
                                </div>
                                <p class="texto-data">${item.data}</p>
                            </li>`
    }
    )
}