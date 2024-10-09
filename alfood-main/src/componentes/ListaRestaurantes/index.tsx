import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import { IPaginacao } from '../../interfaces/IPaginacao';
import { IParms} from '../../interfaces/IParms';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>()
  const [proximaPagina, setProximaPagina] = useState('')
  const [paginaAnterior, setPaginaAnterior] = useState('')
  const [busca, setBusca] = useState('')
  const [opcao, setOpcao] = useState('nome')

  useEffect(() => {
    axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/')
      .then(res => {
        setRestaurantes(res.data.results)
        setProximaPagina(res.data.next)
      })
      .catch(erro => { console.log(erro) })
  }, [])

  const aoBuscar = (evt: React.FormEvent<HTMLFormElement>)=>{
    evt.preventDefault()
    carregarDados('http://localhost:8000/api/v1/restaurantes/',{params:{ordering:opcao,search:busca}})
  }

  const carregarDados = (url: string, parametro?:IParms) => {

    axios.get<IPaginacao<IRestaurante>>(url,parametro)
      .then(res => {
        setRestaurantes(res.data.results)
        setProximaPagina(res.data.next)
        setPaginaAnterior(res.data.previous)
  })
  }


  return (<section className={style.ListaRestaurantes}>

    <form onSubmit={(evt: React.FormEvent<HTMLFormElement>)=>aoBuscar(evt)}>
      <label>Buscar restaurante: </label>
      <input
        value={busca}
        type="text"
        placeholder="Busca"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { setBusca(evt.target.value)}}
      />

      <select 
        name="nome" 
        value={opcao} 
        onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {setOpcao(evt.target.value)}}
      >
        <option value="nome" >nome</option>
        <option value="id">id</option>
      </select>

      <button type='submit'>Bucar</button>
    </form>

    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {paginaAnterior &&
      <button onClick={() => carregarDados(paginaAnterior)}>
        {'voltar'}
      </button>
    }
    {proximaPagina &&
      <button onClick={() => carregarDados(proximaPagina)}>
        {'próximo'}
      </button>
    }
  </section>)
}

export default ListaRestaurantes