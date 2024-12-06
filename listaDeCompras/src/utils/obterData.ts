export const obterData = () =>{
    const data = new Date
    const diaDaSemana = data.toLocaleDateString("pt-Br", { weekday: 'long' })
    const dataFormatada = data.toLocaleDateString()
    const hora = data.toLocaleTimeString("pt-BR", { hour: 'numeric', minute: 'numeric' })

    return `${diaDaSemana} (${dataFormatada}) ás ${hora}`
}