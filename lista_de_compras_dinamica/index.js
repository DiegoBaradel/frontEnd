const item = document.querySelector('#input-item')
const lista = document.querySelector('#lista-de-compras')
const btnAdicionarItem = document.querySelector('#adicionar-item')

let contador = 1

btnAdicionarItem.addEventListener('click', (evt)=>{
    evt.preventDefault()
    
    if (item.value === '') {
        alert('item invalido ou já existe')
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
    lista.appendChild(itemDaLista)

    item.value = ''
})

const criarHoraDoItem = ()=>{
    const diaDaSemana = new Date().toLocaleDateString('pt-BR',{weekday: "long"})
    const data = new Date().toLocaleDateString('pt-BR')
    const hora = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit', minute:'2-digit'})
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    return dataCompleta
}