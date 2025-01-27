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
    const total = useSelector((state:RootState)=>{
        let subTotal = 0
        state.itens.map(item=>{
            console.log(item.quantidade)
            subTotal += item.quantidade * item.preco
        })
        return subTotal
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
                    Subtotal: <strong>R$ {total.toFixed(2)}</strong>
                </span>

            </div>
        </div>
    )
}

export default Carrinho