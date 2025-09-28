document.addEventListener('DOMContentLoaded', () => {
    const botaoCalcular = document.querySelector('#CALCULAR');
    const botaoAdicionar = document.querySelector('#add-input');
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
        let valores = [];
        inputs.forEach(input => {
            const v = parseInt(input.value);
            if (!isNaN(v)) valores.push(v);
        });

        if (valores.length === 0) return;

        let resultado = valores[0];
        for (let i = 1; i < valores.length; i++) {
            resultado = Math.pow(resultado, valores[i]);
        }

        const operacao = valores.join(" ^ ") + ` mod 12 = ${resultado % 12}`;

        window.location.href = `../../Relogio/Relogio.html?resultado=${encodeURIComponent(operacao)}`;
    });
});