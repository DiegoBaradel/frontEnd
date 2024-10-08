import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    :root{
        --fonte: 'Montserrat', sans-serif;
        --branco: #ffffff;
        --preto: #000000;
        --cinza: #e2e2e2;
    }
    body{
        margin: 0;
        font-family: var(--fonte);
        background-color: var(--branco);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyled