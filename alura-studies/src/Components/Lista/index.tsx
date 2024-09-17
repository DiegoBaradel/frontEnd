import ITarefa from "../../type"
import Item from "./Item"
import style from "./lista.module.scss"

interface ListaProps{
    tarefas: ITarefa[]
    aoSelecionarTarefa : (tarefa:ITarefa)=>void
}
const Lista =({tarefas, aoSelecionarTarefa}:ListaProps)=>{

    return(
        <aside className={style.listaTarefas}>
            <h2>Lista de tarefas</h2>
            <ul>
                {tarefas.map((tarefa)=>(
                    <Item
                        key={tarefa.id}
                        nome={tarefa.nome}
                        tempo={tarefa.tempo}
                        id={tarefa.id}
                        concluido={tarefa.concluido}
                        selecionado={tarefa.selecionado}
                        aoSelecionarTarefa = {aoSelecionarTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista