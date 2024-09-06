import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import Titulo from "../../components/titulo"
import Videos from '../../json/db.json'
import styled from 'styled-components'
import PaginaNaoEncontrada from '../paginaNaoEncontrada'

const StyledIframe = styled.iframe`
    height: 80vh;
`

const Player = ()=>{
    const parametros = useParams()
    const video = Videos.find(item => item.id === Number(parametros.id))

    if (!video) {
        return <PaginaNaoEncontrada />
    }
    return(
        <>
        <Banner url='Player' />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section>
            <StyledIframe 
                width="100%" 
                height="100%" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>    
            </StyledIframe>
        </section>
        </>
    )
}

export default Player