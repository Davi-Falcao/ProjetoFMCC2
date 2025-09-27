const botaoCalcular = document.querySelectorAll('#CALCULAR');
const botaoAdicionar = document.querySelectorAll('#add-input');
let inputCount = 2;

function adicionarInput() {
  inputCount++;
  const container = document.getElementById('inputs-container');
  const div = document.createElement('div');
  div.className = 'animated-border-container';
  div.innerHTML = `<input type="number" class="animated-border-input" placeholder="Número ${inputCount}">
                   <button class="botao-excluir" type="button" title="Excluir">×</button>`;
  div.querySelector('.botao-excluir').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

botaoAdicionar.forEach(btn => btn.addEventListener('click', adicionarInput));

botaoCalcular.forEach(btn => btn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('#inputs-container input');
  let soma = 0;
  inputs.forEach(input => {
    const v = Number(input.value);
    if (!Number.isNaN(v)) soma += v;
  });

  const resultado = ((soma % 12) + 12) % 12;

  window.location.href = `../../Relogio/Relogio.html?resultado=${resultado}`;
}));