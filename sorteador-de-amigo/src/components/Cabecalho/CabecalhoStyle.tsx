import styled from "styled-components";
import logoG from "../../imagens/logo.png"
import logoP from "../../imagens/logo-pequeno.png"

const CabecalhoStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 55px;
    div:nth-child(1){
        background-image: url(${logoP});
        width: 235px;
        height: 199px;
    }
    div:nth-child(2){
        z-index: 1;
        max-width: 328px ;
        img{
            max-width: 100%;
        }
    }

    @media (min-width: 1024px ) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding-top: 123px;
        div:nth-child(1){
            background-image: url(${logoG});
            width: 351px;
            height: 117px;
        }
        div:nth-child(2){
            max-width: 450px ;
            img{
                max-width: 100%;
            }
        }
    }
`

export default CabecalhoStyled