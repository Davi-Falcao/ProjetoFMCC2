let botaoCalcular = [...document.querySelectorAll('#CALCULAR')];

botaoCalcular.forEach((n) => {
    n.addEventListener('click', () => {
        window.location.href = '../../Relogio/Relogio.html';
    });
});
