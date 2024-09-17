import { useState } from "react"
import Botao from "../Botao"
import style from "./formulario.module.scss"
import ITarefa from "../../type"
import { v4 as uuidv4 } from 'uuid'

interface FormularioProps{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({setTarefas}: FormularioProps) => {

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('')

    const aoAdicionarTarefa = (evt: React.FormEvent) =>{
        evt.preventDefault()
        setTarefas(listaTarefas => [
            ...listaTarefas,
            {
                nome:tarefa,
                tempo:tempo,
                id: uuidv4() ,
                selecionado: false,
                concluido: false,
            }
        ])
        setTarefa('')
        setTempo('')
    }

    return (
        <form 
            onSubmit={(evt)=>aoAdicionarTarefa(evt)} 
            className={style.novaTarefa}
        >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Nova tarefa:
                </label>
                <input
                    value={tarefa}
                    onChange={(evt)=>{setTarefa(valor=> valor=evt.target.value)}}
                    type="text"
                    name="tarefa"
                    required
                    id="tarefa"
                    placeholder="digite uma nova tareda"
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo:
                </label>
                <input
                    value={tempo}
                    onChange={(evt)=>{setTempo(valor=> valor=evt.target.value)}}
                    type="time"
                    step="1"
                    id="tempo"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    
                />
            </div>
            <Botao
                 type="submit"
            >
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario