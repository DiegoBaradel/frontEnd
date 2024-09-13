const Lista =()=>{

    const listaTarefas= [
        {
            nome: 'react',
            tempo: '02:30:00'
        },
        {
            nome: 'javaScript',
            tempo: '00:30:00'
        }]

    return(
        <aside className="listaTarefas">
            <h2>Lista de tarefas</h2>
            <ul>
                {listaTarefas.map((tarefa, index)=>(
                    <li className="item" key={index}>
                        <h2>{tarefa.nome}</h2>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista