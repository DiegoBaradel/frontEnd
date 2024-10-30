import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import Sorteio from "./Sorteio"

jest.mock('../state/hooks/useListaDeParticipantes',()=>{
    return{
        useListaDeParticipantes: jest.fn()
    }
})

describe("Na pagina de sorteio", ()=>{

    const participantes = ['ana','maria','jorel']

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test("todos os perticipantes podem exibir o seu amigo secreto", ()=>{
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const option = screen.queryAllByRole('option')
        expect(option).toHaveLength(participantes.length)
    })
})