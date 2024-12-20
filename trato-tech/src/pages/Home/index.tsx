import Header from '../../components/Header'
import styles from './Home.module.scss'
import relogio from '../../assets/inicial.png'

const Home = () => {
    return(
        <div>
            <Header 
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor dite do Brasil!'
                className={styles.header}
                imagem={relogio}
            />
        </div>
    )
}

export default Home