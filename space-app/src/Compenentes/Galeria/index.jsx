import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaConteiner = styled.div`
    display: flex;
`
const ImagemGaleriaConteiner = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const Galeria = ({aoFotoSelecionada ,fotos =[]})=>{
    return(
        <>
            <Tags></Tags>
            <GaleriaConteiner>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                        <ImagemGaleriaConteiner>
                            {fotos.map(foto=><Imagem
                                aoZoomSolicitado = {aoFotoSelecionada} 
                                key={foto.id} 
                                foto = {foto}
                                expandir = {false}
                            />)}
                        </ImagemGaleriaConteiner>
                </SecaoFluida>
                <Populares/>
            </GaleriaConteiner>
        </>
    )
}

export default Galeria