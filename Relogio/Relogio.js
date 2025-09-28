window.onload = function () {
  // Seleciona o elemento relógio no HTML
  const clock = document.querySelector(".clock");
  const radius = 130;
  const center = 160;
  const urlParams = new URLSearchParams(window.location.search);
  const resultadoStr = urlParams.get("resultado");

  // função para criar os números do relógio de 0 a 11
  for (let i = 0; i < 12; i++) {
    // calcula a posição de cada numero com base na circunferencia
    const angle = i * 30 * (Math.PI / 180);
    const x = center + radius * Math.sin(angle) - 12;
    const y = center - radius * Math.cos(angle) - 12;

    // Cria o elemento para cada número e posiciona no relógio
    const number = document.createElement("div");
    number.className = "clock-number";
    // utiliza a variável local i para definir o número e a posiciona no local calculado
    number.textContent = i;
    number.style.left = `${x}px`;
    number.style.top = `${y}px`;
    // adiciona o objeto number no clock html
    clock.appendChild(number);
  }

  // obtem o resultado do mod 12 inserido pelo usuário
  let resultadoNum = 0;
  // testa se o resultado não é nulo
  if (resultadoStr !== null) {
    document.getElementById("resultado").textContent = resultadoStr;
  }

  if (resultadoStr) {
    // extrai apenas o número após o sinal de igual usando regex
    const match = resultadoStr.match(/=\s*(-?\d+)/);
    if (match) {
      // converte o string extraído para um número
      resultadoNum = Number(match[1]);
    }
  }

  //função para atualizar o relógio
  function updateClock() {
    // Calcula o ângulo dos ponteiros com base no resultado do mod 12
    const minuteDeg = 0;
    // resultado do mod multiplicado por 30, 360 graus / 12 horas = 30 graus por hora
    const hourDeg = resultadoNum * 30;

    // Aplica a rotação no ponteiros da hora fazendo a indicação do relógio
    document.getElementById(
      "minute"
    ).style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock();
};
