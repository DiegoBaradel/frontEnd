import styled from "styled-components"

const StyledDiv = styled.div`
    h1{
        font-size: 32px;
        font-weight: 500;
        text-align: center;
    }
`

const Titulo  = ({children})=>{
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}
export default Titulo