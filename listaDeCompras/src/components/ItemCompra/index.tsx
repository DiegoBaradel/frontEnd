import IProduto from "../../interface/IProduto"
import { obterData } from "../../utils/obterData"
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

    
    const aoDeletar = (item:IProduto) =>{
        setItens(itens.filter(i=>i.nome!==item.nome))
    }
    const aoEditar = (item:IProduto) =>{
        
        const novoItem = prompt('digite um novo item')
        const listaFiltrada = itens.filter(i=>i.nome !== item.nome)
        if (novoItem!==null&&novoItem!=='') {
            setItens([...listaFiltrada,{nome:novoItem, ckeck:item.ckeck, data:obterData()}])
        }
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
            <p className="item-lista-texto">{item.data}</p>
        </li>
    )
}

export default ItemCompra