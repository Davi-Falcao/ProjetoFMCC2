const botaoCalcular = document.querySelector('#CALCULAR'); // apenas um botão

botaoCalcular.addEventListener('click', () => {
    const inputs = document.querySelectorAll('#inputs-container input');
    let resultado = null;
    let operacao = "";

    inputs.forEach((input, index) => {
        let valor = parseInt(input.value);
        if (!isNaN(valor)) {
            if (resultado === null) {
                resultado = valor; // primeiro número vira a base
                operacao += valor;
            } else {
                resultado = Math.pow(resultado, valor); // exponenciação
                operacao += ` ^ ${valor}`;
            }
        }
    });

    if (resultado !== null) {
        const resultadoModulo = ((resultado % 12) + 12) % 12; // garantir resultado positivo
        operacao += ` mod 12 = ${resultadoModulo}`;
        window.location.href = `../../Relogio/Relogio.html?resultado=${encodeURIComponent(operacao)}`;
    } else {
        alert("Por favor, insira pelo menos um número válido.");
    }
});