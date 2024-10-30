import styled from "styled-components";

const FormularioStyle = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        input{
            height: 48px;
            border-radius: 37.5px;
            border: 1px solid #000000;
            box-shadow: 2px 2px 0px 0px #000000;
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: left;
            padding-left: 65px;
            &:focus{
                outline: none;
            }
        }
        button{
            width: 155px;
            height: 48px;
            border-radius: 37.5px;
            border: 1px solid #000000;
            box-shadow: 2px 2px 0px 0px #000000;
            background: #C4C4C4;
            align-self: center;
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: center;
            color: #444444;
            cursor: pointer;
            &:hover{
                opacity: 0.8;
            }
            &:disabled{
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }
    p{
        color: #842029;
        background-color: #f8d7da;
        padding: 16px;
        border: 1px solid #f5c2c7;
        border-radius: 8px;
    }

    @media (min-width:1024px) {
        div{
            width: 726px;
            border: 2px solid #000000;
            border-radius: 37.5px;
            flex-direction: row;
            gap: 0;
            input{
                border-radius: 37.5px 0 0 37.5px ;
                flex-grow: 1;
            }
            button{
                width: 227px;
                border-radius: 0 37.5px 37.5px 0;
            }
        }
    }
`

export default FormularioStyle