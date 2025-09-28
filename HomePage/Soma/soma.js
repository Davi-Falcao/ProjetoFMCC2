const botaoCalcular = document.querySelector('#CALCULAR'); // apenas querySelector
const botaoAdicionar = document.querySelector('#add-input'); // apenas querySelector
let inputCount = 2;

function adicionarInput() {
  inputCount++;
  const container = document.getElementById('inputs-container');
  const div = document.createElement('div');
  div.className = 'animated-border-container';
  div.innerHTML = `
    <input type="number" class="animated-border-input" placeholder="Número ${inputCount}">
    <button class="botao-excluir" type="button" title="Excluir">×</button>
  `;
  div.querySelector('.botao-excluir').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

botaoAdicionar.addEventListener('click', adicionarInput);

botaoCalcular.addEventListener('click', () => {
  const inputs = document.querySelectorAll('#inputs-container input');
  let soma = 0;
  let operacao = "";

  inputs.forEach((input, index) => {
    const v = Number(input.value);
    if (!Number.isNaN(v)) {
      soma += v;
      operacao += (index === 0 ? "" : " + ") + v;
    }
  });

  const resultadoModulo = soma % 12;
  operacao += ` mod 12 = ${resultadoModulo}`;

  window.location.href = `../../Relogio/Relogio.html?resultado=${encodeURIComponent(operacao)}`;
});