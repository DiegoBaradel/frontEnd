import style from './Input.module.css'

interface PropsInput{
    lable:string
    id:string
    placeholder:string
    valor: string
    setValor: React.Dispatch<React.SetStateAction<string>>
    type?: string
}

const Input = ({lable, id, placeholder, valor, setValor, type="text"}:PropsInput) => {
    return (
        <div className={style.form__campo__digitacao}>
            <label htmlFor={id}>{lable}</label>
            <input
                type={type}
                placeholder={placeholder}
                required
                id={id}
                value={valor}
                onChange={evento=>setValor(evento.target.value)}
            />
        </div>
    )
}

export default Input