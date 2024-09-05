import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
    color: var(--branco);
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
    cursor: pointer;
`
const CabecalhoLink =({url, children})=>{


    return(
        <StyledLink to={url}>{children}</StyledLink>
    )
}

export default CabecalhoLink