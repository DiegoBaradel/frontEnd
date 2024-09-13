import './Banner.css'

interface BannerProps{
    enderecoImagem: string
    textoImagem?:string
}


const Banner = ({enderecoImagem, textoImagem}:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoImagem}/>
        </header>
    )
}

export default Banner