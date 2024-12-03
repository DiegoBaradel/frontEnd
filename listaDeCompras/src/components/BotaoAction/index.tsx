import IProduto from '../../interface/IProduto'
import './BotaoAction.css'

interface BotaoActionProps{
    children: React.ReactNode
    onClick: (e:IProduto)=>void
    item:IProduto
}

const BotaoAction = ({children, onClick, item}:BotaoActionProps)=>{
    return(
        <button onClick={()=>onClick(item)} className='botao-action'>
            {children}
        </button>
    )
}

export default BotaoAction