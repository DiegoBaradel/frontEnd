import { useDispatch, useSelector } from 'react-redux'
import Iitem from '../../Interfaces/IItens'
import { mudarFavorito } from '../../store/reducers/itens'

import styles from './Itens.module.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaCartPlus} from 'react-icons/fa'
import { RootState } from '../../store'
import { mudarCarrinho } from '../../store/reducers/carrinho'
import classNames from 'classnames'

const iconeProps = {
    size: 24,
    color: '#041833',
}

const Itens = ({titulo, foto, preco, descricao, favorito, id, carrinho}:Iitem) =>{

    const dispatch = useDispatch()
    const estaNoCarrinho = useSelector((state:RootState) => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id))

    const resolverFavorito = () => {
        dispatch(mudarFavorito(id))
    }
    const resolverCarrinho = () =>{
        dispatch(mudarCarrinho({titulo, foto, preco, descricao, favorito, id}))
    }


    return(
        <div className={classNames(styles.item, {[styles.itemNoCarrinho]:carrinho})}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}> 
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito? 
                            <AiFillHeart 
                                {...iconeProps} 
                                color='#ff0000' 
                                className={styles['item-acao']}
                                onClick={resolverFavorito}
                            />:
                            <AiOutlineHeart 
                                {...iconeProps} 
                                className={styles['item-acao']}
                                onClick={resolverFavorito} 
                            />}
                        <FaCartPlus {...iconeProps} color={estaNoCarrinho? '#1875e8': iconeProps.color} className={styles['item-acao']} onClick={resolverCarrinho} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itens