function verificaValor(chute){
    const numero = +chute

    if (naoNumero(numero)) {
        elementoChute.innerHTML+='<div>não é um número</div>';
    }
    if (intervalo(numero)) {
        elementoChute.innerHTML+=`<div>O número não esta no intervalo de ${elementoMenorNumaro.textContent} à ${elementoMaiorNumaro.textContent}</div>` 
    }
    if (verificarValorNumeroSecreto(numero)) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>
            <button id="btn-start">Start</button>
       `
    } else if(numero > numeroAleatorio){
        elementoChute.innerHTML+='<div>O número secreto é menor </i></div><i class="fa-solid fa-angle-down"></i></div>';
    }else{
        elementoChute.innerHTML+='<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>';
    }
}

function naoNumero(numero){
    return Number.isNaN(numero);
}

function intervalo(numero){
    return (numero < elementoMenorNumaro.textContent || numero > elementoMaiorNumaro.textContent)
}

function verificarValorNumeroSecreto(numero){
    return numero === numeroAleatorio;
}

document.body.addEventListener('click', (evt)=>{
    if (evt.target.id == 'btn-start'){
        window.location.reload();
    }
})