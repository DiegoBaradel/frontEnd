import styled from "styled-components"
import EstiloGlobal from "./Compenentes/EstiloGlobal"
import Cabacalho from "./Compenentes/Cabecalho"
import BarraLateral from "./Compenentes/BarraLateral"
import Banner from "./Compenentes/Banner"

const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

function App() {
  
  return (
    <FundoGradiente>
      <EstiloGlobal/>
      <Cabacalho/>
      <BarraLateral/>
      <Banner/>
    </FundoGradiente>
  )
}

export default App
