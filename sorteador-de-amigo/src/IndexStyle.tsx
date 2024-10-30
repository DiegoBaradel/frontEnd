import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html {
        background: #4B69FD;
        font-family: 'Poppins', sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

`

export default GlobalStyle