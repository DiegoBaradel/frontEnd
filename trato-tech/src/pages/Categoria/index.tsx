import { useSelector } from "react-redux"
import Header from "../../components/Header"
import { RootState } from "../../store"
import { useParams } from "react-router-dom"
import styles from './Categoria.module.scss'
import Itens from "../../components/Itens"

const Categoria = ()=> {

    const {nomeCategoria} = useParams()
    const {categorias, itens} = useSelector((state:RootState)=>({
        categorias: state.categorias.find(categoria=> categoria.id === nomeCategoria),
        itens: state.itens.filter(item=> item.categoria === nomeCategoria),
    }))

    return(
        <div>
            <Header
                titulo={categorias?.nome!}
                descricao={categorias?.descricao!}
                imagem={categorias?.header!}
            />
            <div className={styles.itens}>
                {itens.map(item=>
                    <Itens key={item.id} {...item} />
                )}
            </div>
        </div>
    )
}

export default Categoria