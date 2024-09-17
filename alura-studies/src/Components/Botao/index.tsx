import style from './botao.module.scss'

interface BotaoProps{
    texto?: string
    children?: React.ReactNode,
    type?: 'submit'|'button'|'reset',
    onClick?: () => void
}

const Botao =({children, type='button', onClick}: BotaoProps)=>{
    return(
        <button
            onClick={onClick}
            className={style.botao}
            type={type}
        >    
        {children}
        </button>
    )
}

export default Botao