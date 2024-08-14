import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilo = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabacalho = ()=>{
    return(
        <HeaderEstilo>
            <img src="./imagens/logo.png" alt="logo do space app"/>
            <CampoTexto/>
        </HeaderEstilo>
    )
}

export default Cabacalho