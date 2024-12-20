import styles from './Footer.module.scss'
import { 
    FaFacebook, 
    FaTwitter, 
    FaInstagram 
} from 'react-icons/fa'

const iconesProps={
    color: '#ffffff',
    size:24
}

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconesProps}/>
                <FaTwitter {...iconesProps}/>
                <FaInstagram {...iconesProps}/>
            </div>
            <span>
                Desenvolvido por Alura
            </span>
        </footer>
    )
}

export default Footer