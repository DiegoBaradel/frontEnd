import IProduto from '../../interface/IProduto'
import './CheckboxCustomizado.css'

interface CheckboxCustomizadoProps{
    id:string
    item: IProduto
    setItens:(e:IProduto[])=>void
    itens:IProduto[]
}


const CheckboxCustomizado = ({id, item, setItens, itens}:CheckboxCustomizadoProps) => {

    
    const aoClicarCheckbox = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        e.preventDefault()
        const listaAntiga = itens.filter(i=>i!==item)
        setItens([...listaAntiga,{nome:item.nome,ckeck:!item.ckeck}])
    }

    return (
        <div className="checkbox-container">
            <label htmlFor={`checkbox-${id}`}>
                <input
                    onClick={aoClicarCheckbox}
                    type="checkbox"
                    className="checkbox-input"
                    id={`checkbox-${id}`}
                />
                <div className={`checkbox-customizado ${item.ckeck? "checked": ''}`} ></div>
            </label>
        </div>
    )
}

export default CheckboxCustomizado