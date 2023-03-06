function validarChute(chute) {
  console.log("Verificou:" + chute);

  const numero = +chute;

  if (Number.isNaN(numero) || numero >= 1000 || numero <= 0) {
    elementChute.innerHTML += "<div>Valor é invalido</div>";
  } else {
    if (numero === secretNumber) {
      document.body.innerHTML = `<h2>Você acertou, Parabéns!</h2>
          <h3>O número era ${secretNumber}.</h3>
          <button id="playAgain" class="btn-playAgain">Jogar Novamente</button
          `;
    } else {
      if (numero > secretNumber) {
        elementChute.innerHTML +=
          "<div>O numero secreto é menor <i class='fa-solid fa-arrow-down'></i></div>";
      } else {
        elementChute.innerHTML +=
          "<div>O numero secreto é maior <i class='fa-solid fa-arrow-up'></i></div>";
      }
    }
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id == "playAgain") {
    window.location.reload();
  }
});
