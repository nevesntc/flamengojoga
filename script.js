const clockElement = document.querySelector(".clock");
const dataHoraJogo = new Date("2023-11-23T21:30:00");
let timer = setInterval(() => {
  const agora = new Date();
  const tempoRestante = dataHoraJogo - agora;
  if (tempoRestante > 0) {
    const segundosRestantes = Math.floor((tempoRestante / 1000) % 60);
    const minutosRestantes = Math.floor((tempoRestante / 60000) % 60);
    const horasRestantes = Math.floor((tempoRestante / 3600000) % 24);
    const diasRestantes = Math.floor(tempoRestante / 86400000);
    const horaFormatada = horasRestantes.toString().padStart(2, '0');
    const minutosFormatados = minutosRestantes.toString().padStart(2, '0');
    const segundosFormatados = segundosRestantes.toString().padStart(2, '0');
    clockElement.textContent = `${diasRestantes}d:${horaFormatada}h:${minutosFormatados}m:${segundosFormatados}s:`;
  } else {
    clearInterval(timer);
    clockElement.textContent = "Jogo do Flamengo começou!";
  }
}, 1000);

const transitionOverlay = document.querySelector(".transition-overlay");
const content = document.querySelector(".background");
setTimeout(function () {
    transitionOverlay.style.display = "none";
    content.style.display = "block";
}, 2000);

const linkedinLink = document.getElementById("linkedin-link");
linkedinLink.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/bruno-neves-a849bb177/", "_blank");
});
