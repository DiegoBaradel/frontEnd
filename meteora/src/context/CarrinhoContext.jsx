import { createContext, useState } from "react"

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) =>{

    const [carrinho, setCarrinho] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidade, setQuantidade, quantidadeTotal, setQuantidadeTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}