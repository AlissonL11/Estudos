const gotoNextPage = (permitido = 0) => {
  if (permitido === 1) {
    window.location.href = `main.html?permitido=${permitido}`;
  } else {
    window.location.href = "main.html";
  }
};
