import { useState } from "react"
import CadastroContext from "../cadastroContext"

const CadastroProvider = ({children})=>{
    const [nome , setNome] = useState('')    
    const [cargo, setCargo] = useState('')
    return (
        <CadastroContext.Provider value={{nome, setNome, cargo, setCargo}}>
            {children}
        </CadastroContext.Provider>
    )
}

export default CadastroProvider