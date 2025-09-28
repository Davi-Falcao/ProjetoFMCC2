const botaoMultiplicacao = [
  ...document.querySelectorAll("#BotaoMultiplicacao"),
];
const botaoSoma = [...document.querySelectorAll("#BotaoSoma")];
const botaoExponenciacao = [
  ...document.querySelectorAll("#BotaoExponenciacao"),
];

//Faz o direcionamento para a pagina de multiplicacao
botaoMultiplicacao.forEach((n) => {
  n.addEventListener("click", () => {
    window.location.href = "../HomePage/Multiplicacao/multiplicacao.html";
  });
});

//Faz o direcionamento para a pagina de soma
botaoSoma.forEach((n) => {
  n.addEventListener("click", () => {
    window.location.href = "../HomePage/Soma/soma.html";
  });
});

//Faz o direcionamento para a pagina de exponenciacao
botaoExponenciacao.forEach((n) => {
  n.addEventListener("click", () => {
    window.location.href = "../HomePage/Exponenciacao/exponenciacao.html";
  });
});
