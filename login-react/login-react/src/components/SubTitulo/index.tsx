import style from './SubTitulo.module.css'

const SubTitulo:React.FC<{children:string}> = ({children}) =>{
    return(
        <h2 className={style.form__texto}>{children}</h2>
    )
}

export default SubTitulo