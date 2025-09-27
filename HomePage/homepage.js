let botaoMultiplicacao = [...document.querySelectorAll('#BotaoMultiplicacao')];
let botaoSoma = [...document.querySelectorAll('#BotaoSoma')];
let botaoExponenciacao = [...document.querySelectorAll('#BotaoExponenciacao')];


botaoMultiplicacao.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../Relogio/Relogio.html';
    });
});
