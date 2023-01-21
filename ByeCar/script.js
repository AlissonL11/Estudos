// Define o índice do item 
let currentIndex = 0;

let timer; //variável para o temporizador

// Seleciona o elemento que contém a LISTA de cards
const carouselCards = document.querySelector("#carousel-cards");

// Seleciona os ITENS da LISTA de cards
const items = carouselCards.querySelectorAll("li");

// Mostra o próximo item
function next() {
  // Esconde o item atual
  items[currentIndex].style.display = "none";

  // Atualiza o índice do item atual
  currentIndex = (currentIndex + 1) % items.length;

  // Exibe o próximo item
  items[currentIndex].style.display = "block";
}

// Mostra o item anterior
function prev() {
  // Esconde o item atual
  items[currentIndex].style.display = "none";

  // Atualiza o índice do item atuall
  currentIndex = (currentIndex - 1 + items.length) % items.length;

  // Exibe o item anterior
  items[currentIndex].style.display = "block";
}

// Mudando de item automaticamente, a cada 5 segundos

timer = setInterval(next, 5000)


function pausar(){        //funçao criada para conseguir pausar o giro dos cards, ao clicar em "saiba mais"
  clearInterval(timer);
}
function continuar(){      //continua o giro automático do carrossel
  timer = setInterval(next, 5000)
}



// modais ABAIXO !

function exibir() {

    pausar(); //chamando a função, para pausar o giro do carrossel enquanto as informações extras são exibidas


    if (currentIndex == 0) {                      //verifica qual o index atual (card atual sendo exibido)
        var modal = document.getElementById("modal-1"); //pega o id do modal correspondente ao card (index)
    if (modal.style.display === "block") {            //faz o display ser alterado de none para block (as duas ultimas linhas são basicamente isso)
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
    };

    if (currentIndex == 1){
    var modal = document.getElementById("modal-2");
    if (modal.style.display === "block") {
      modal.style.display = "none";

      clearInterval(timer);
    } else {
      modal.style.display = "block";
    }
  }
}

function fechar(){
  continuar()     //continua o giro do carrossel

  if (currentIndex == 0) {                            //essa função é basicamente o inverso daquela lá em cima, que exibe os modais.
    var modal = document.getElementById("modal-1");
if (modal.style.display == "none") {
  modal.style.display == "block";
} else {
  modal.style.display = "none";
}
};

if (currentIndex == 1){
var modal = document.getElementById("modal-2");
if (modal.style.display === "none") {
  modal.style.display = "block";
} else {
  modal.style.display = "none";
}
}
}

