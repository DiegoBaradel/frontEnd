import { useState } from 'react'
import './styles.css'

const BarraDePesquisa = ()=>{

    const [termoPesquisa, setTermoPesquisa] = useState('')

    return(
        <input 
            className="barra-pesquisa" 
            type="search" 
            placeholder="digite o que vc procura"
            value={termoPesquisa}
            onChange={evento => setTermoPesquisa(evento.target.value)} 
        />
    )
}

export default BarraDePesquisa