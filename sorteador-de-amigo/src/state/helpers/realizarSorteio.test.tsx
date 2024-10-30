import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigos', ()=>{
    test('um participante não pode sortear ele mesmo',()=>{
        const participantes = ['ana', 'maria', 'jorel', 'ricardo']

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante =>{
            const amigo = sorteio.get(participante)
            expect(amigo).not.toEqual(participante)
        })

    })
    
})