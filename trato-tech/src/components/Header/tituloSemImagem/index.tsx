import style from './TituloSemImagem.module.scss'

interface TituloSemImagemProps {
    titulo: string
    descricao: string
}

const TituloSemImagem = ({titulo, descricao}:TituloSemImagemProps) => {
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>
                {titulo}
            </h1>
            <h2 className={style.descricao}>
                {descricao}
            </h2>
        </div>
    )
}

export default TituloSemImagem