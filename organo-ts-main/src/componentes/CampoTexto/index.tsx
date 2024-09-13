import './CampoTexto.css'

interface CampoTextoProps{
    placeholder: string
    aoAlterado: (valor:string)=> void
    label: string
    valor:string
    obrigatorio?: boolean
    tipo?: 
        "button" | "checkbox" | "color" | "date" |
        "datetime-local" | "email" | "file" | "hidden" |
        "image" | "month" | "number" | "password" | "radio" |
        "range" | "reset" | "search" | "submit" | "tel" | "text" |
        "time" | "url" | "week"
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio=false, tipo = 'text'}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                type={tipo}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto