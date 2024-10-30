import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "."
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"


jest.mock('../../state/hooks/useListaDeParticipantes',()=>{
    return{
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista de participantes vazia',()=>{

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve renderizar sem elementos',()=>{
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes',()=>{

    const participantes = ['ana', 'catarina']

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('deve renderizar com N elementos',()=>{
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})