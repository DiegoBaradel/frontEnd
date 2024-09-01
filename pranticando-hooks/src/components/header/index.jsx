import styled from "styled-components"

    const StyledH1 = styled.h1`
        color: #ffffff;
        background-color: #000000;
        text-align: center;
        padding: 20px 0;
        max-width: 100%;
    `

const Header = ()=>{
    return(
        <>
            <StyledH1>Aprendendo useContext</StyledH1>
        </>
    )
}

export default Header