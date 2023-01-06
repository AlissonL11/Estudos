const dia = document.getElementById('days')
const hora = document.getElementById('hours')
const minuto = document.getElementById('minutes')
const segundo = document.getElementById('secs')

const data = "29 dec 2024" //data final da contagem regressiva

function countDown() {
    const dataFinal = new Date(data) // transforma a data final em uma constante.
    const hoje = new Date() //pega a data de "hoje" 

    const segTotal = (dataFinal-hoje)/1000; //calculando os segundos: de hoje até a data definida

    const diasTotal = Math.floor(segTotal /60 /60 /24); //pegando o número de dias (inteiro)
    const horaTotal = Math.floor(segTotal /60 /60) % 24; //pegando as horas, sem minutos e segundos
    const minTotal = Math.floor(segTotal /60) % 60; //pegando minutos totais
    const segundosTotal = Math.floor(segTotal) % 60; //pegando os segundos 

    dia.innerHTML = formatoTempo(diasTotal)+`D`                 //jogando a informação para a tela do site 
    hora.innerHTML =  formatoTempo(horaTotal)+`H`
    minuto.innerHTML = formatoTempo(minTotal)+`M`
    segundo.innerHTML = formatoTempo(segundosTotal)+`S`

}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)

// fim do countdown //

function checkKeyboardCode() {
    document.addEventListener('keydown', (event) =>{
        var name = event.key;
        var code = event.code;
        alert(`tecla pressionada ${name} \r \n Código da tecla ${code}`);
    },false);
}
//checkKeyboardCode();

//fim da função que verifica a tecla pressionada

function addKeyboardEventListeners() {

    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
            if(code == "Digit1") {
                ingresso1.classList.toggle('card-highlight');
                ingresso2.classList.remove('card-highlight');
                ingresso3.classList.remove('card-highlight');
                ingresso4.classList.remove('card-highlight');
            }
            if(code == 'Digit2') {
                ingresso1.classList.remove('card-highlight');
                ingresso2.classList.toggle('card-highlight');
                ingresso3.classList.remove('card-highlight');
                ingresso4.classList.remove('card-highlight');
            }
            if(code == 'Digit3') {
                ingresso1.classList.remove('card-highlight');
                ingresso2.classList.remove('card-highlight');
                ingresso3.classList.toggle('card-highlight');
                ingresso4.classList.remove('card-highlight');
            }
            if(code == 'Digit4') {
                ingresso1.classList.remove('card-highlight');
                ingresso2.classList.remove('card-highlight');
                ingresso3.classList.remove('card-highlight');
                ingresso4.classList.toggle('card-highlight');
            }
    }, false);
}

addKeyboardEventListeners();

// fim da função para selecionar os ingressos pelo teclado //

const ingressos = [];

function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle('card-highlight')
}

function selectCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
        if(ingressos.includes(selector)) ingressos.pop(selector);
        else ingressos.push(selector)
}

function showSelectedCards() {
    if(ingressos.length > 0) alert("Ingressos Selecionados: " + ingressos);
}
