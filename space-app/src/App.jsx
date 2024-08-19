import styled from "styled-components"
import EstiloGlobal from "./Compenentes/EstiloGlobal"
import Cabacalho from "./Compenentes/Cabecalho"
import BarraLateral from "./Compenentes/BarraLateral"
import Banner from "./Compenentes/Banner"
import Galeria from "./Compenentes/Galeria"
import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./Compenentes/ModalZoom"

const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const ConteinerApp = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainConteiner = styled.div`
  display: flex;
  gap: 24px;
`
const GaleriaConteiner = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App=()=> {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoFechar=(evt)=>{
    evt.preventDefault()
    setFotoSelecionada(!fotoSelecionada)
  }
  
  return (
    <FundoGradiente>
      <ConteinerApp>
        <EstiloGlobal />
        <Cabacalho />
        <MainConteiner>
          <BarraLateral />
          <GaleriaConteiner>
            <Banner
              texto='A galeria mais completa de fotos do espaço!'
              backgroundImage='./imagens/banner.png'
            />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              fotos={fotosDaGaleria}
            />
          </GaleriaConteiner>
        </MainConteiner>
      </ConteinerApp>
      <ModalZoom 
        foto = {fotoSelecionada}
        aoFechar={aoFechar}
      />
    </FundoGradiente>
  )
}

export default App
