import { spawn } from 'child_process'
import ITarefa from '../../../type'
import style from '../lista.module.scss'

interface ItemProps extends ITarefa {
    aoSelecionarTarefa : (tarefa:ITarefa)=>void
}

const Item = ({nome, tempo, id, concluido, selecionado, aoSelecionarTarefa}: ItemProps) => {
    return (
        <li 
            className={`${style.item} ${selecionado? style.itemSelecionado :''} ${concluido ? style.itemCompletado : ''}`}
            onClick={()=> !concluido && aoSelecionarTarefa({nome, tempo, id, concluido, selecionado})}
        >
            <h2>{nome}</h2>
            <span>{tempo}</span>
            {concluido && <span className={style.concluido} area-label = 'tarefa completada'></span>}
        </li> 
    )
}

export default Item