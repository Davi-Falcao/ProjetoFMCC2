let botaoMultiplicacao = [...document.querySelectorAll('#BotaoMultiplicacao')];
let botaoSoma = [...document.querySelectorAll('#BotaoSoma')];
let botaoExponenciacao = [...document.querySelectorAll('#BotaoExponenciacao')];


botaoMultiplicacao.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../HomePage/Multiplicacao/multiplicacao.html';
    });
});



botaoSoma.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../HomePage/Soma/soma.html';
    });
});


botaoExponenciacao.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../HomePage/Exponenciacao/exponenciacao.html';
    });
});