import shuffle from "just-shuffle"

export const realizarSorteio = (participantes:string[])=>{
    const totalParticipantes = participantes.length
        const embaralhado = shuffle(participantes)
        const resultado = new Map<string, string>()
        for (let index = 0; index < participantes.length; index++) {
            const indexAmigo = index === (totalParticipantes-1)? 0 : index+1
            resultado.set(embaralhado[index], embaralhado[indexAmigo])
        }
        return resultado
}