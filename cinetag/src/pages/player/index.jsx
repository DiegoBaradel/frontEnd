import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import Titulo from "../../components/titulo"
import styled from 'styled-components'
import PaginaNaoEncontrada from '../paginaNaoEncontrada'
import { useEffect, useState } from 'react'

const StyledSection= styled.section`
    display: flex;
    align-items: center;
`

const StyledDiv = styled.div `
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
`
const StyledIframe= styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
`

const Player = ()=>{
    const parametros = useParams()
    const [video, setVideo] = useState()

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/DiegoBaradel/api-cinetag/videos?id=${parametros.id}`)
        .then(res => res.json())
        .then(dados=> setVideo(...dados))
    },[])

    if (!video) {
        return <PaginaNaoEncontrada />
    }
    return(
        <>
        <Banner url='Player' />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <StyledSection>
            <StyledDiv>
            <StyledIframe
                src={video.link} 
                title={video.titulo} 
                >    
            </StyledIframe>
            </StyledDiv>
        </StyledSection>
        </>
    )
}

export default Player