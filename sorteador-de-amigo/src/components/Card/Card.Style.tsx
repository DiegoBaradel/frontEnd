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
    form{
        margin: 0 16px;
        display: flex;
        flex-direction: column;
        select{
            width: 100%;
            height: 48px;
            border-radius: 32px;
            border: 1px solid #000000;
            box-shadow: 2px 2px 0px 0px #111111;
            font-family: 'Poppins';
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            padding-left: 29px;
            margin: 24px 0 32px 0;
        }
        p{
            width: 328px;
            height: 54px;
            font-family: 'Poppins';
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            text-align: center;
        }
        .btn__sorte{
            width: 155px;
            height: 59.53px;
            border-radius: 37.5px;
            border: 2px solid #000000;
            background-color: #fe652b;
            color: #ffffff;
            margin: 21px auto;
            &:hover{
                opacity: 0.8;
            }
        }
    }

    .alerta{
        margin-bottom: 32px;
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        text-align: center;
        color: #fe652b;
    }
    @media (min-width: 1024px ){
        margin-top: -35px;
        h2{
            font-size: 32px;
            line-height: 48px;
        }
        form{
            select{
                width: 476px;
            }
            p{
                width: 475px;
            }
            .btn__sorte{
                width: 227px;
                height: 80px;
                font-size: 20px;
            }
        }

        .alerta{
            font-size: 25px;
        }
    }
`

export default CardStyle