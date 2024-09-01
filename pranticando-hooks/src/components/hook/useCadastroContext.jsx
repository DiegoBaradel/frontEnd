import { useContext } from "react"
import CadastroContext from "../../context/cadastroContext"

const useCadastroContext = ()=>{
    const context = useContext(CadastroContext)

    if (context === undefined) {
        throw new Error('não esta dentro de contexto')
    }
    return context
}

export default useCadastroContext