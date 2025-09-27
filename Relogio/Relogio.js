window.onload = function() {
      const clock = document.querySelector('.clock');
      const radius = 130; // ajuste para os números ficarem dentro do relógio
      const center = 160;

      for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const x = center + radius * Math.sin(angle) - 12; // ajuste para centralizar o número
        const y = center - radius * Math.cos(angle) - 12;

        const number = document.createElement('div');
        number.className = 'clock-number';
        number.textContent = i; // mostra de 0 a 11
        number.style.left = `${x}px`;
        number.style.top = `${y}px`;
        clock.appendChild(number);
      }

      function updateClock() {
        const now = new Date();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const minuteDeg = minutes * 6;
        const hourDeg = (hours % 12) * 30 + minutes * 0.5;

        document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
        document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
      }

      setInterval(updateClock, 1000);
      updateClock();
    };

