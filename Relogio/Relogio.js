window.onload = function() {
      const clock = document.querySelector('.clock');
      const radius = 130; 
      const center = 160;

      for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const x = center + radius * Math.sin(angle) - 12; 
        const y = center - radius * Math.cos(angle) - 12;

        const number = document.createElement('div');
        number.className = 'clock-number';
        number.textContent = i; 
        number.style.left = `${x}px`;
        number.style.top = `${y}px`;
        clock.appendChild(number);
      }

      // Pegue o parâmetro da URL aqui!
      const urlParams = new URLSearchParams(window.location.search);
      const resultadoStr = urlParams.get('resultado');
      // Extrai o número final do resultado (depois do '=')
      let resultadoNum = 0;
      if (resultadoStr) {
        const match = resultadoStr.match(/=\s*(-?\d+)/);
        if (match) {
          resultadoNum = Number(match[1]);
        }
      }

      function updateClock() {
        const minuteDeg = 0;
        const hourDeg = resultadoNum * 30;

        document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
        document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
      }

      setInterval(updateClock, 1000);
      updateClock();
    };

