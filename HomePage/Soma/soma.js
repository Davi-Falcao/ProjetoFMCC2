let botaoCalcular = [...document.querySelectorAll('#CALCULAR')];
let botaoAdicionar = [...document.querySelectorAll('#add-input')];
let inputCount = 2;

function adicionarInput() {
    inputCount++;
    const container = document.getElementById('inputs-container');
    const div = document.createElement('div');
    div.className = 'animated-border-container';
    div.innerHTML = `<input type="text" class="animated-border-input" placeholder="Número ${inputCount}">
                    <button class="botao-excluir" type="button" title="Excluir">×</button>`;
    
    div.querySelector('.botao-excluir').addEventListener('click', () => {
    div.remove();
    });
    container.appendChild(div);
}


botaoAdicionar.forEach((n) => {
    n.addEventListener('click', adicionarInput);
});

botaoCalcular.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../../Relogio/Relogio.html';
    });
});
