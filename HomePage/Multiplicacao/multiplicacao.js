let botaoCalcular = [...document.querySelectorAll('#CALCULAR')];
let botaoAdicionar = [...document.querySelectorAll('#add-input')];
let inputCount = 2;

function adicionarInput() {
    inputCount++;
    const container = document.getElementById('inputs-container');
    const div = document.createElement('div');
    div.className = 'animated-border-container';
    div.innerHTML = `<input type="number" class="animated-border-input" placeholder="Número ${inputCount}">
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
        const inputs = document.querySelectorAll('#inputs-container input');
        let produto = 1; 

        inputs.forEach(input => {
            let valor = parseInt(input.value) || 1; 
            produto *= valor;
        });

        let resultado = ((produto % 12) + 12) % 12;

        window.location.href = `../../Relogio/Relogio.html?resultado=${resultado}`;
    });
});