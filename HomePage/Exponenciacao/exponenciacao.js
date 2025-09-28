// Utiliza o querySelector para pegar o botao com id CALCULAR
const botaoCalcular = document.querySelector('#CALCULAR'); 

function exponenciacao() {
    const inputs = document.querySelectorAll('#inputs-container input');
    let resultado = null;
    let operacao = "";

    inputs.forEach((input) => {
        let valor = parseInt(input.value);
        if (!isNaN(valor)) {
            if (resultado === null) {
                resultado = valor; 
                operacao += valor;
            } else {
                //Usa Math.pow para calcular a exponenciação
                resultado = Math.pow(resultado, valor);
                operacao += ` ^ ${valor}`;
            }
        }
    });

    // Para garantir que o resultado seja positivo somamos 12 e depois aplicamos o mod 12
    const resultadoModulo = ((resultado % 12) + 12) % 12; 
    operacao += ` mod 12 = ${resultadoModulo}`;
        
    // Redireciona para a página do relógio com o resultado na URL
    window.location.href = `../../Relogio/Relogio.html?resultado=${encodeURIComponent(operacao)}`;
}


botaoCalcular.addEventListener('click', exponenciacao);