const dia = document.getElementById('days')
const hora = document.getElementById('hours')
const minuto = document.getElementById('minutes')
const segundo = document.getElementById('secs')

const data = "29 dec 2022" //data final da contagem regressiva

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