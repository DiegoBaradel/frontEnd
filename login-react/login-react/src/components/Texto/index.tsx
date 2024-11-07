import style from './Texto.module.css'

const Texto:React.FC<{classe:string, children:string}> = ({classe, children})=>{
    return(
        <p className={style[classe]}>{children}</p>
    )
}

export default Texto