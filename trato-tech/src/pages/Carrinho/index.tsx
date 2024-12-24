import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import style from './Carronho.module.scss'
import { RootState } from '../../store'
import Itens from '../../components/Itens'

const Carrinho = () => {

    const carrinho = useSelector((state:RootState) => {
        const itemNoCarrinho = state.carrinho
        return itemNoCarrinho
    })

    return (
        <div>
            <Header
                titulo='Carrinho de compras'
                descricao='Confira produtos que você adicionou ao carrinho'
            />
            <div className={style.carrinho}>
                {carrinho.map(item => <Itens key={item.id} {...item} carrinho/>)}
            </div>
            <div className={style.total}>
                <strong>Resumo da compra</strong>
                <span>
                    Subtotal: <strong>R$ {0.0.toFixed(2)}</strong>
                </span>

            </div>
        </div>
    )
}

export default Carrinho