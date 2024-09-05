import styled from "styled-components"

const StyledSection= styled.section`
    section{
        margin: 2em 20em;
        text-align: center;
    }
`

const Container = ({children})=>{
    return(
        <StyledSection>
            {children}
        </StyledSection>
    )
}

export default Container