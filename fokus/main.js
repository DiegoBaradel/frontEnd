const html = document.querySelector('html');
const logo = document.querySelector('.app__image');
const texto = document.querySelector('.app__title')
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const startBtn = document.querySelector('#start-pause');
const startTxt = document.querySelector('#start-pause span');
const startImagem = document.querySelector('.app__card-primary-butto-icon')
const tempoTxt = document.querySelector('#timer');
const musicaInputCheckBox = document.querySelector('#alternar-musica');
const musicaFoco = new Audio('./sons/luna-rise-part-one.mp3');
const musicaPlay = new Audio('./sons/play.wav');
const musicaPause = new Audio('./sons/pause.mp3');
const musicaAlert = new Audio('./sons/beep.mp3');
musicaFoco.loop = true;
musicaAlert.loop = true;

const tempoFoco = 10;
const tempoCurto = 300;
const tempoLongo = 900;

let controle=tempoFoco;
let tempoIntervalo;
let intervalo = null;
let controler = false;

focoBtn.addEventListener('click', ()=>{
    controle=tempoFoco;
    clear()
    alterarContexto('foco', tempoFoco);
    focoBtn.classList.add('active');
})
curtoBtn.addEventListener('click', ()=>{
    controle=tempoCurto;
    clear()
    alterarContexto('descanso-curto', tempoCurto);
    curtoBtn.classList.add('active');
})
longoBtn.addEventListener('click', ()=>{
    controle=tempoLongo;
    clear()
    alterarContexto('descanso-longo', tempoLongo);
    longoBtn.classList.add('active');
})

musicaInputCheckBox.addEventListener('change', ()=>{
    if(musicaFoco.paused){
        musicaFoco.play();
    }else{
        musicaFoco.pause();
    }
});

function clear(){
    musicaAlert.pause();
    clearInterval(intervalo);
    console.log(controle)
    mostrarTempo(controle);

    intervalo = null;
    controler = false
    startTxt.textContent = 'Começar'
    startImagem.setAttribute('src','./imagens/play_arrow.png')
};

function contagem(){
    if(tempoIntervalo < 1){
        musicaAlert.play();
        alert('tempo acabou');

        let focoFinalizado = new CustomEvent('FocoFinalizado');
        document.dispatchEvent(focoFinalizado);

        clear();
        return;
    }else{
        tempoIntervalo -=1;
        mostrarTempo(tempoIntervalo);
    }
}

startBtn.addEventListener('click', ()=>{
    if(controler){
        musicaPause.play();
        clearInterval(intervalo);
        controler=false;
        startTxt.textContent = 'Começar'
        startImagem.setAttribute('src','./imagens/play_arrow.png');
    }else{
        controler=true;
        musicaPlay.play();
        intervalo = setInterval(contagem,1000);
        startTxt.textContent = 'Pausar';
        startImagem.setAttribute('src','./imagens/pause.png');
    }
});


function alterarContexto(contexto, tempo){
    botoes.forEach((botao)=>{
        botao.classList.remove('active')
    });

    html.setAttribute('data-contexto',contexto);
    logo.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            texto.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            break;
        
        case 'descanso-curto':
            texto.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
                `
            break;
        case 'descanso-longo':
            texto.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
                `
            break;
    
        default:
            break;
    }
    switch (tempo) {
        case tempoFoco:
            mostrarTempo(tempoFoco);
            break;
        case tempoCurto:
            mostrarTempo(tempoCurto);
            break;
        case tempoLongo:
            mostrarTempo(tempoLongo);
            break;
    
        default:
            break;
    }
}

function mostrarTempo(tempo){
    tempoIntervalo = tempo;
    const tempoFormatado = new Date(tempoIntervalo * 1000);
    tempoTxt.innerHTML = `${tempoFormatado.toLocaleTimeString('pt-Br',{minute:'2-digit',second:'2-digit'})}`;
};

mostrarTempo(tempoFoco);
