import styled from "styled-components";

const CardStyle = styled.div`
    background-color: #FFF9EB;
    width: 100vw;
    flex-grow: 1;
    margin-top: -26px;
    border: 1px solid #000000;
    border-top-right-radius: 48px;
    border-top-left-radius: 48px;
    padding: 50px 16px 80px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2{
        color: #4b69fd;
        font-size: 20px;
        line-height: 30px;
    }
    @media (min-width: 1024px ){
        margin-top: -35px;
        h2{
            font-size: 32px;
            line-height: 48px;
        }
    }
`

export default CardStyle