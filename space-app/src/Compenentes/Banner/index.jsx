import styled from "styled-components";

const BannerEstilo = styled.div`
    background-color: aliceblue;
    background-image: url('./imagens/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 1156px;
    height: 328px;
    position: absolute;
    top: 192px;
    right: 0px; 
    display: flex;
    align-items: center;
    h1{
        color: #FFFFFF;
        font-size: 40px;
        line-height: 48px;
        width: 301px;
        height: 144px;
        padding: 0px 0px 0px 64px;
    }
`


const Banner = ()=>{
    return(
        <BannerEstilo>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </BannerEstilo>
    )
}

export default Banner;