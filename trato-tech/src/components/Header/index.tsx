import styles from './Header.module.scss'
import TituloComImagem from './tituloComImagem'
import TituloSemImagem from './tituloSemImagem'

interface HeaderProps{
    titulo: string
    descricao: string
    className?: string
    imagem?: string
}

const Header = ({titulo, descricao, className='', imagem}:HeaderProps) => {
    return(
        <header className={styles.header}>
            {titulo && !imagem && 
                <TituloSemImagem 
                    titulo={titulo}
                    descricao={descricao}
                />
            }
            {titulo && imagem && 
                <TituloComImagem 
                    className={className}
                    titulo={titulo}
                    descricao={descricao}
                    imagem={imagem}
                />
            }
            
        </header>
    )
}

export default Header