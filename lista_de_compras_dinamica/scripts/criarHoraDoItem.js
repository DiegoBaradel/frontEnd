const criarHoraDoItem = ()=>{
    const diaDaSemana = new Date().toLocaleDateString('pt-BR',{weekday: "long"})
    const data = new Date().toLocaleDateString('pt-BR')
    const hora = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit', minute:'2-digit'})
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    return dataCompleta
}

export { criarHoraDoItem }