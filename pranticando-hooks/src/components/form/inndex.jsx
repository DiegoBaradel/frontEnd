
const Form =({label, type, value, setValue}) =>{

    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={(evt)=>{setValue(evt.target.value)}} type={type} placeholder={`digite o ${label}`} required />
        </>
    )
}

export default Form