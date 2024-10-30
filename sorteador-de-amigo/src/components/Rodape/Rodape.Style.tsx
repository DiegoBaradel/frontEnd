import styled from "styled-components";

const RodapeStyle = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    button{
        width: 155px;
        height: 64px;
        border-radius: 37.5px;
        background-color:#FE652BFC;
        color: #ffffff;
        font-family: 'poppins', sans-serif;
        font-size: 16;
        font-weight: 600;
        text-align: center;
        border: 1px solid #000000;
        box-shadow: 2px 2px 0px 0px #000000;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
    img{
        width: 127px;
        height: 98px;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        width: 726px;
        justify-content: space-between;
        button{
            width: 351px;
            height: 80px;
            font-size: 20px;
        }
        img{
            width: 237px;
            height: 183px;
        }
    }
`

export default RodapeStyle