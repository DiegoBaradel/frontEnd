import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Input from './components/Input'
import ItemCompra from './components/ItemCompra'
import TituloSegundario from './components/TituloSegundario'
import IProduto from './interface/IProduto'
import { obterData } from './utils/obterData'

function App() {

  const [item, setItem] = useState<string>('')
  const [itens, setItens] = useState<IProduto[]>([])

  const adicionarCompra = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let nomeItem = { nome: item, ckeck: false, data:obterData()}
    if (item === '') {
      alert('campo em branco!!!')
      return
    }
    
    setItens([...itens, nomeItem])
    setItem('')
  }

  return (
    <>
      <main>
        <img src="./images/bag.png" alt="sacola de compres" />

        <form onSubmit={adicionarCompra}>
          <Input type='text' placeholder='Digite o item que deseja adicionar' onChange={setItem} value={item} />
          <Botao>
            Salvar item
          </Botao>
        </form>
        {itens.length === 0 &&
          <ul>
            <TituloSegundario titulo='Lista de Compras' />
            <p>Sua lista está vazia. Adicione itens a ela para não esquecer nada na próxima compra!</p>
          </ul>
        }

        {itens.length !== 0 &&
          <>
            <ul>
              <TituloSegundario titulo='Lista de Compras' />
              {itens.filter(item => item.ckeck === false).map((item) => <ItemCompra itens={itens} setItens={setItens} id={item.nome} item={item} key={item.nome} />)}
            </ul>
            <ul>
              <TituloSegundario titulo='Comprado' />
              {itens.filter(item => item.ckeck === true).map((item) => <ItemCompra itens={itens} setItens={setItens} id={item.nome} item={item} key={item.nome} />)}
            </ul>
          </>

        }

      </main>
    </>
  )
}

export default App
