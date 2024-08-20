import styled from "styled-components"
import EstiloGlobal from "./Compenentes/EstiloGlobal"
import Cabacalho from "./Compenentes/Cabecalho"
import BarraLateral from "./Compenentes/BarraLateral"
import Banner from "./Compenentes/Banner"
import Galeria from "./Compenentes/Galeria"
import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./Compenentes/ModalZoom"
import Footer from "./Compenentes/Footer"

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
  const [busca, setBusca] = useState('')
  const [tags, setTags] = useState(0)

  useEffect(()=>{
    setTags(0)
    setFotosDaGaleria(fotos.filter(foto=>{
      return busca===''? foto : foto.titulo.toLowerCase().includes(busca.toLowerCase())
    }))
  },[busca])

  useEffect(()=>{
    setBusca('')
    setFotosDaGaleria(fotos.filter(foto=>{
      return tags === 0 ? foto : foto.tagId === tags
    }))
  },[tags])

  const aoFechar=(evt)=>{
    evt.preventDefault()
    setFotoSelecionada(!fotoSelecionada)
  }
  
  const aoAlternarFavorito = (foto)=>{
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada, 
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoFavorita=>{
      return{
        ...fotoFavorita,
        favorita: fotoFavorita.id === foto.id ? !foto.favorita : fotoFavorita.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <ConteinerApp>
        <EstiloGlobal />
        <Cabacalho
          busca={busca}
          setBusca={setBusca}
        />
        <MainConteiner>
          <BarraLateral />
          <GaleriaConteiner>
            <Banner
              texto='A galeria mais completa de fotos do espaço!'
              backgroundImage='./imagens/banner.png'
            />
            <Galeria
              setTags={setTags}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </GaleriaConteiner>
        </MainConteiner>
      </ConteinerApp>
        <Footer/>
      <ModalZoom 
        foto = {fotoSelecionada}
        aoFechar={aoFechar}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
