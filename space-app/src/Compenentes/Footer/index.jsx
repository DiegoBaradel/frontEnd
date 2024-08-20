import styled from "styled-components"

const StyledFooter = styled.footer`
    margin-top: 73px;
    height: 80px;
    max-width: 100%;
    background-color: #04244F;
    display: flex;
    align-items: center;
`
const StyledConteinerFooter = styled.div`
    width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledDiv = styled.div`
    color: #ffffff;
    display: flex;
    gap: 36px;
`

const Footer = ()=>{
    return(
        <StyledFooter>
            <StyledConteinerFooter>
                <StyledDiv>
                    <img src="./imagens/sociais/facebook.svg" alt="logo do facebook" />
                    <img src="./imagens/sociais/twitter.svg" alt="logo do twitter" />
                    <img src="./imagens/sociais/instagram.svg" alt="logo do instagram" />
                </StyledDiv>
                <StyledDiv>
                    <p>Desenvolvido por Alura.</p>
                </StyledDiv>
            </StyledConteinerFooter>
        </StyledFooter>)
}

export default Footer