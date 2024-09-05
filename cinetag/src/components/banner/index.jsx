import styled from "styled-components"

const StyledDiv = styled.div`
    background-image: ${props=>`url('/imagens/Banner-${props.$url}.svg')`};
    background-repeat: no-repeat;
    width:100%;
    height: 347px;
    background-size:cover;
`


const Banner =({url})=>{

    return(
        <StyledDiv $url={url}>

        </StyledDiv>
    )
}
export default Banner