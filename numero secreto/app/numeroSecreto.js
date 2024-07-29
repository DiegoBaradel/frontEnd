const elementoMenorNumaro = document.querySelector('#numero-menor');
const elementoMaiorNumaro = document.querySelector('#numero-maior');

elementoMaiorNumaro.textContent = 1000;
elementoMenorNumaro.textContent = 1;

const numeroAleatorio = gerarNumero();

function gerarNumero(){
    let numero = elementoMenorNumaro.textContent-1
    while(numero < elementoMenorNumaro.textContent){
        numero = parseInt(Math.random() * elementoMaiorNumaro.textContent + 1);
        if(numero>=elementoMenorNumaro.textContent){
            return numero;
        }
    }
}

console.log(numeroAleatorio);