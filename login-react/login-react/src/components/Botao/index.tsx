import style from './Botao.module.css'

const Botao:React.FC<{children:string}> = ({children}) =>{
    return(
        <button className={style.form__botao}>{children}</button>
    )
}

export default Botao