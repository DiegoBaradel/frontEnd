import style from './Link.module.css'

const Link:React.FC<{children:string}> = ({children})=>{
    return(
        <a href="#" className={style.container__links__link}>{children}</a>
    )
}

export default Link