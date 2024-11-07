import style from './ItemRedesSociais.module.css'

const ItemRedesSociais:React.FC<{nome:string, link:string}> = ({nome, link})=>{
    return(
        <li className={style.item}>
            <a href={link}>
                <img 
                    src={`./img/${nome}.svg`} 
                    alt={`icone do ${nome}`} 
                />
                {nome}
            </a>
        </li>
    )
}

export default ItemRedesSociais