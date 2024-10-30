import { act, fireEvent, render, screen } from "@testing-library/react"
import Formulario from "."
import { RecoilRoot } from "recoil"

describe('testes de formulario',()=>{

    test('Quando o input esta vazio, novos participantes não podem ser adicionados',()=>{
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        // encontrar o input do DOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        // Encontrar o botão do DOM
        const botao = screen.getByRole('button')
    
        // Garantir que o input esteja no Dom
        expect(input).toBeInTheDocument()
        // Garantir que o botao esteja desabilitado
        expect(botao).toBeDisabled() 
    })
    
    test('adicionar um participante caso exista um nome preenchido',()=>{
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        // encontrar o input do DOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        // Encontrar o botão do DOM
        const botao = screen.getByRole('button')
    
        // inserir um valor no input
        fireEvent.change(input, {
            target:{
                value:'Ana Catarina'
            }
        })
    
        // clicar no botão
        fireEvent.click(botao)
    
        // garantir que o input fique com foco
        expect(input).toHaveFocus()
    
        // garantir que o valor do input seja vazio
        expect(input).toHaveValue("")
    
    })
    
    test('nomes dulicados não podem ser adicionardos na lista',()=>{
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        // encontrar o input do DOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        // Encontrar o botão do DOM
        const botao = screen.getByRole('button')
    
        // inserir um valor no input
        fireEvent.change(input, {
            target:{
                value:'Ana Catarina'
            }
        })
    
        // clicar no botão
        fireEvent.click(botao)
        // inserir um valor no input
        fireEvent.change(input, {
            target:{
                value:'Ana Catarina'
            }
        })
    
        // clicar no botão
        fireEvent.click(botao)
    
        const mensagemErro = screen.getByRole('alert')
    
        expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    test('a mensagem de erro deve sumir depois do timer',()=>{
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        // encontrar o input do DOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        // Encontrar o botão do DOM
        const botao = screen.getByRole('button')
    
        // inserir um valor no input
        fireEvent.change(input, {
            target:{
                value:'Ana Catarina'
            }
        })
    
        // clicar no botão
        fireEvent.click(botao)
        // inserir um valor no input
        fireEvent.change(input, {
            target:{
                value:'Ana Catarina'
            }
        })
    
        // clicar no botão
        fireEvent.click(botao)
    
        let mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
          });
        
        mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeNull()
        
    })
})
