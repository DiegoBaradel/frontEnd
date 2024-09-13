import Botao from "../Botao"
import "./styles.scss"

const Formulario = () => {
    return (
        <form className="novaTarefa">
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Nova tarefa:
                </label>
                <input
                    type="text"
                    name="tarefa"
                    required
                    id="tarefa"
                    placeholder="digite uma nova tareda"
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">
                    Tempo:
                </label>
                <input
                    type="time"
                    step="1"
                    id="tempo"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    
                />
            </div>
            <Botao />
        </form>
    )
}

export default Formulario