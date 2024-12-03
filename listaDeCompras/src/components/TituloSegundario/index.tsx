import './TituloSegundario.css'

interface TituloSegundarioProps{
    titulo: string
}

const TituloSegundario = ({titulo}:TituloSegundarioProps) =>{
    return(
        <>
            <h2>{titulo}</h2>
            <hr />
        </>
    )
}

export default TituloSegundario