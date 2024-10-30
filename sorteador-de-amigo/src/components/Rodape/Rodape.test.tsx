import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "."
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"

jest.mock("../../state/hooks/useListaDeParticipantes",()=>{
    return{
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock("react-router-dom",()=>{
    return{
        useNavigate: ()=>mockNavegacao
    }
})
jest.mock("../../state/hooks/useSorteador",()=>{
    return{
        useSorteador: ()=>mockSorteio
    }
})

describe('quando não existem participantes suficientes', ()=>{

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('o sorteio não pode iniciar', ()=>{
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})
describe('quando existem participantes suficientes', ()=>{

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['ana', 'catarina', 'josefina'])
    })

    test('o sorteio pode iniciar', ()=>{
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })

    test('o sorteio foi iniciado',()=>{
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
    
})