import './Input.css'

interface InputProps{
    type: string
    placeholder: string
    value: string
    onChange: (item: string)=> void
}

const Input = ({type, placeholder, value, onChange}:InputProps)=>{
    return(
        <input value={value} onChange={e=>onChange(e.target.value)} id="input-item" type={type} placeholder={placeholder}/>
    )
}

export default Input