import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Card from './components/Card'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar/indes'
import Post from './Interface/Post'

function App() {

  const [dados, setDados] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(res => res.json())
      .then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ?
            dados.map(dado => (
              <li key={dado.id}>
                <Card
                  {...dado}
                />
              </li>
            )) :
            null
          }
        </ul>
      </div>
    </div>
  )
}

export default App
