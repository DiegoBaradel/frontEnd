import IProduto from "../../interface/IProduto"
import BotaoAction from "../BotaoAction"
import CheckboxCustomizado from "../CheckboxCustomizado"

import './ItemCompra.css'

interface ItemCompraProps {
    item: IProduto
    id: string
    setItens: (e: IProduto[]) => void
    itens: IProduto[]
}

const ItemCompra = ({ item, id, setItens, itens }: ItemCompraProps) => {
    const data = new Date
    const diaDaSemana = () => {
        const diaDaSemana = data.toLocaleDateString("pt-Br", { weekday: 'long' })
        const dataFormatada = data.toLocaleDateString()
        const hora = data.toLocaleTimeString("pt-BR", { hour: 'numeric', minute: 'numeric' })
        return `${diaDaSemana} (${dataFormatada}) ás ${hora}`
    }

    const aoDeletar = (item:IProduto) =>{
        setItens(itens.filter(i=>i.nome!==item.nome))
    }
    const aoEditar = (item:IProduto) =>{
        console.log('editar')
    }

    return (
        <li>
            <div className="item-lista-container">
                <div className="Container-nome-container">
                    <CheckboxCustomizado itens={itens} setItens={setItens} id={id} item={item} />
                    <p className={item.ckeck ? "nome-checked" : ""}>{item.nome}</p>
                </div>
                <div>
                    <BotaoAction onClick={aoDeletar} item={item}>
                        <img src="/images/delete.svg" alt="botao de deletar" />
                    </BotaoAction>
                    <BotaoAction onClick={aoEditar} item={item}>
                        <img src="/images/edit.svg" alt="botao de editar" />
                    </BotaoAction>
                </div>
            </div>
            <p className="item-lista-texto">{diaDaSemana()}</p>
        </li>
    )
}

export default ItemCompra