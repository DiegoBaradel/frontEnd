import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: var(--preto);
`
const StyledH2 = styled.h2`
    font-size: 18px;
    font-weight: 400;
    color: #F0F0F0;
    text-align: center;
    padding: 33px;
    margin: 0;
`
const RodaPe = ()=>{

    return(
        <StyledFooter>
            <StyledH2>Desenvolvido por Alura.</StyledH2>
        </StyledFooter>
    )
}

export default RodaPe