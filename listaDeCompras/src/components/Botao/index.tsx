import './Botao.css'

interface BotaoProps{
    children: React.ReactNode
}


const Botao = ({children}:BotaoProps) =>{
    return(
        <button className='adicionar-botao'>{children}</button>
    )
}

export default Botao