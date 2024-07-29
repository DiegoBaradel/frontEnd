function tocaSon(idSom){
    const elemento = document.querySelector(idSom)

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = [...document.querySelectorAll('.tecla')];

for (index=0;index<listaDeTeclas.length;index++){
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSon(idSom);
    }
    tecla.onkeydown = function(evento){
        if(evento.code ==='Space'||evento.code ==='Enter')
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}