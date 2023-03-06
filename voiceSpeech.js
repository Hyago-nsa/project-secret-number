const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const elementChute = document.getElementById("chute");

function onSpeak(e) {
  console.log(e.results[0][0].transcript);
  ownVoice = e.results[0][0].transcript;
  exibirChute(ownVoice);
  validarChute(ownVoice);
}

function exibirChute(chute) {
  elementChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>`;
}

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  recognition.start();
});
