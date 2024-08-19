import styled from "styled-components"

const Figure = styled.figure`
    background-color: #001634;
    max-width: ${props=>  props.$expandir ? '100%':'448px'};
    height: ${props=>  props.$expandir ? '100%':'336px'};
    padding-bottom: 8px;
    margin: 0 0 0 24px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    img{
        flex-grow: 1;
        height: 256px;
    }
`
const Figcaption = styled.figcaption`
    margin: 0 22px;
    color: #ffffff;
    h3{
        margin: 0;
        margin-top: 16px;
        font-family: 'GandhiSansBold';
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px ;
    p{
        margin: 0;
    }
    div{
        display: flex;
        gap: 24px;
    }
`
const StyledButton = styled.button`
    background-color: transparent;
    background-image: url(${props=>props.$url});
    background-size: cover;
    background-position: center;
    border: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: ${props => props.$url==='/icones/expandir.png' && props.$expandir ?'none':'block'};
`


const Imagem = ({foto, expandir=false, aoZoomSolicitado})=>{
    return(
        <Figure $expandir = {expandir}>
            <img src={foto.path} alt=""/> 
            <Figcaption>
                <h3>{foto.titulo}</h3>
                <Footer>
                    <p>{foto.fonte}</p>
                    <div>
                        <StyledButton $url='/icones/favorito.png'></StyledButton>
                        {!expandir && <StyledButton onClick={() => aoZoomSolicitado(foto)} $url='/icones/expandir.png'></StyledButton>}
                    </div>
                </Footer>
            </Figcaption>
        </Figure>
    )
}

export default Imagem