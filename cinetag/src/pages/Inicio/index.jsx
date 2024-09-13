import { useEffect, useState } from "react"
import Banner from "../../components/banner"
import Lista from "../../components/lista"
import Titulo from "../../components/titulo"

const Inicio = () =>{

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/DiegoBaradel/api-cinetag/videos')
        .then(res=> res.json())
        .then(dados=>setVideos(dados))
    },[])
    return(
        <>
            <Banner url='Home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section>
                <Lista
                    type={videos}
                />
            </section>
        </>
    )
}

export default Inicio