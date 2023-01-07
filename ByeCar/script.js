// Define o índice do item atual
let currentIndex = 0;

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

  // Atualiza o índice do item atual
  currentIndex = (currentIndex - 1 + items.length) % items.length;

  // Exibe o item anterior
  items[currentIndex].style.display = "block";
}

// Mudando de item automaticamente

setInterval(next, 3000)


// modais (faltando associar o modal ao item certo a ser exibido)

function exibir() {
    if (currentIndex = 0) {
        var modal = document.getElementById("modal-1");
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
    };

    if (currentIndex = 1){
    var modal = document.getElementById("modal-2");
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }
}


  