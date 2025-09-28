// Utiliza o querySelector para pegar o botao com id CALCULAR e o botao de adicionar input
const botaoCalcular = document.querySelector("#CALCULAR");
const botaoAdicionar = document.querySelector("#add-input");
// Contador para numerar os inputs adicionados dinamicamente e tornar os dois primeiros obrigatorios
let inputCount = 2;

// Função para adicionar um novo campo de input com o botão de exclusão ao lado
function adicionarInput() {
  // Incrementa o contador de inputs depois dos dois primeiros formularios fixoss
  inputCount++;
  const container = document.getElementById("inputs-container");
  // Cria uma div para conter o input e o botão de exclusão e adiciona ao container no html
  const div = document.createElement("div");
  div.className = "animated-border-container";
  div.innerHTML = `
        <input type="number" class="animated-border-input" placeholder="Número ${inputCount}">
        <button class="botao-excluir" type="button" title="Excluir">×</button>
    `;
  div
    .querySelector(".botao-excluir")
    .addEventListener("click", () => div.remove());
  //Ao final ele adiciona a div a variavel container que referencia o elemento no html
  container.appendChild(div);
}

function multiplicar() {
  // Pega todos os inputs dentro do container e guarda na variavel constante inputs
  const inputs = document.querySelectorAll("#inputs-container input");
  let produto = 1;
  // String para montar a operação que será exibida no relógio
  let operacao = "";

  //Para cada input ele pega o valor, converte para inteiro e verifica se é um numero
  inputs.forEach((input, index) => {
    let valor = parseInt(input.value);
    if (!isNaN(valor)) {
      produto *= valor;
      //Aqui ele monta a string da operação para exibir no relógio, com o operador ternario ? para adicionar o * apenas entre os numeros
      operacao += (index === 0 ? "" : " * ") + valor;
    }
  });

  //Para garantir que o resultado seja positivo somamos 12 e depois aplicamos o mod 12
  const resultadoModulo = ((produto % 12) + 12) % 12;
  operacao += ` mod 12 = ${resultadoModulo}`;

  // Redireciona para a página do relógio com o resultado na URL
  window.location.href = `../../Relogio/Relogio.html?resultado=${encodeURIComponent(
    operacao
  )}`;
}

botaoAdicionar.addEventListener("click", adicionarInput);

botaoCalcular.addEventListener("click", multiplicar);
