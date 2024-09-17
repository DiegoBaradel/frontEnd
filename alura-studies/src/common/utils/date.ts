export const paraSegundos = (tempo: string) =>{
    const [hora='0', minuto='0', segundo='0'] = tempo.split(':')

    const converterHora = Number(hora)*3600
    const converterminuto = Number(minuto)*60
    const convertersegundo = Number(segundo) + converterHora + converterminuto

    return convertersegundo
}