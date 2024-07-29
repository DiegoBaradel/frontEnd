const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formularioAdicionartarefa = document.querySelector('.app__form-add-task');
const areaTexto = document.querySelector('.app__form-textarea');
const ulTarefa = document.querySelector('.app__section-task-list');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const listaTarefas = JSON.parse(localStorage.getItem('tarefa')) || [];

let tarefaSelecionada = null;
let liTarefaSelecionada = null;
let referenciaTarefa = null;

function atualizarLista(){
    localStorage.setItem('tarefa', JSON.stringify(listaTarefas));
};
function cancelarLimpar(){
    formularioAdicionartarefa.classList.toggle('hidden');
    areaTexto.value='';
}

function mostrarTarefa(){
    ulTarefa.innerHTML='';

    listaTarefas.forEach((tarefa)=>{
        const criaElementoTarefa = criarTarefa(tarefa);
        ulTarefa.append(criaElementoTarefa);
    });
};

function criarTarefa(tarefa){
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
                        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
                    </svg>`;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');
    paragrafo.textContent = tarefa.tarefa;

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    botao.onclick = ()=>{
        const tarefaAtualizada = prompt('Qual é a nova tarefa?');
        if (tarefaAtualizada) {
            paragrafo.textContent = tarefaAtualizada;
            tarefa.tarefa = tarefaAtualizada;
            atualizarLista();
        }
    }
    li.addEventListener('click',()=>{

        document.querySelectorAll('.app__section-task-list-item').forEach(elemento=>{
            elemento.classList.remove('app__section-task-list-item-active');
        });

        tarefaSelecionada = paragrafo.textContent;
        liTarefaSelecionada = li;

        if (tarefaSelecionada == paragrafoDescricaoTarefa.textContent) {
            tarefaSelecionada = null;
             paragrafoDescricaoTarefa.textContent = '';
            return;
        }

        li.classList.add('app__section-task-list-item-active');
        paragrafoDescricaoTarefa.textContent=paragrafo.textContent;

    });

    const imagem = document.createElement('img');
    imagem.setAttribute('src', './imagens/edit.png');

    botao.append(imagem);
    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    return li;
};

btnAdicionarTarefa.addEventListener('click', (evt)=>{
    formularioAdicionartarefa.classList.toggle('hidden');
});
btnCancelar.addEventListener('click', ()=>{
    cancelarLimpar();
})

formularioAdicionartarefa.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const tarefa = {
        'tarefa': areaTexto.value
    };

    criarTarefa(tarefa);
    listaTarefas.push(tarefa);
    atualizarLista();
    mostrarTarefa();
    cancelarLimpar();
    
});

mostrarTarefa();

document.addEventListener('FocoFinalizado', ()=>{
    if (liTarefaSelecionada && tarefaSelecionada) {
        
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled','disabled');
        atualizarLista();
    }
});