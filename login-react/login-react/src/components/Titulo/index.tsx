import style from './Titulo.module.css'

const Titulo:React.FC<{children:string}> = ({children}) =>{
    return(
        <h1 className={style.form__titulo}>{children}</h1>
    )
}

export default Titulo