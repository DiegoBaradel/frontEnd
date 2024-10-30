import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../Atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({get})=>{
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        const eventos = todosOsEventos.filter(evt =>{
            if (!filtro.data) {
              return true
            }
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evt.inicio.toISOString().slice(0,10)
            return ehOMesmoDia
          })
          return eventos
    }
    
})

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async ()=>{
    const respostaHttp = await fetch('http://localhost:8080/eventos')
    const eventosJson: IEvento[] = await respostaHttp.json()
    return eventosJson.map(evento=> ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})