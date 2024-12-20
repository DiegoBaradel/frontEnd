import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import styles from './PaginaPadrao.module.scss'
import Footer from '../Footer'

const PaginaPadrao = ()=>{
    return(
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default PaginaPadrao