import styles from './Header.module.scss'

interface HeaderProps{
    titulo: string
    descricao: string
    className: string
    imagem: string
}

const Header = ({titulo, descricao, className='', imagem}:HeaderProps) => {
    return(
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img 
                    src={imagem} 
                    alt={titulo} 
                />
            </div>
        </header>
    )
}

export default Header