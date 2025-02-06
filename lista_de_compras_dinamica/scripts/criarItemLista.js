import { criarHoraDoItem } from "./criarHoraDoItem.js"

const item = document.querySelector('#input-item')
let contador = 1

const criarItemLista = () => {
    if (item.value === '') {
        alert('item invalido')
        return
    }


    const itemDaLista = document.createElement('li')
    const container = document.createElement('div')
    container.classList.add('lista-item-container')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = `checkbox-${contador++}`
    const nomeProduto = document.createElement('p')
    nomeProduto.innerHTML = item.value
    const dataFormatada = document.createElement('p')
    dataFormatada.classList.add('texto-data')
    dataFormatada.innerHTML = criarHoraDoItem()


    checkbox.addEventListener('click', ()=>{

        if (checkbox.checked) {
            nomeProduto.style.textDecoration = 'line-through'
        } else {
            nomeProduto.style.textDecoration = 'none'
        }

    })

    container.appendChild(checkbox)
    container.appendChild(nomeProduto)
    itemDaLista.appendChild(container)
    itemDaLista.appendChild(dataFormatada)

    item.value = ''
    return itemDaLista
}

export { criarItemLista }