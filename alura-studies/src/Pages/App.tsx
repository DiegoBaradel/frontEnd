import { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista"
import style from './app.module.scss'
import ITarefa from "../type";

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  const aoSelecionarTarefa = (tarefa: ITarefa) => {
    setSelecionado(tarefa)
    setTarefas(lista => lista.map(itemLista => ({ ...itemLista, selecionado: itemLista.id === tarefa.id ? true : false })))
  }

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              concluido: true
            }
          }
          return tarefa;
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario
        setTarefas={setTarefas}
      />
      <Lista
        tarefas={tarefas}
        aoSelecionarTarefa={aoSelecionarTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa = {finalizarTarefa}
      />
    </div>
  );
}

export default App;
