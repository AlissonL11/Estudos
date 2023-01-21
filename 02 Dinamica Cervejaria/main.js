const renderText = () => {
  const url = new URLSearchParams(window.location.search);
  const acesso = url.get("permitido");

  const texto = document.getElementById("texto");

  if (acesso) {
    texto.innerHTML =
      "Olá! Gostaria de te dar boas vindas a Cervejaria do Pericles. Aqui você encontrará as melhores bebidas do Brasil!";
  } else {
    texto.innerHTML =
      "Sinto muito, mas este site só é permitido para maiores de 18 anos! :(";
  }
};
