const tempo_display = document.getElementById("tempo_placeholder")
const titulo_display = document.getElementById("titulo")

const pling_audio = document.getElementById("pling")

Notification.requestPermission((result) => {
  console.log(result);
});


let tempo
let timer

function tempo_menos_um() {
  if (tempo > 0) {
    tempo--
    //console.log(tempo)
    tempo_display.textContent = tempo
    titulo.textContent = tempo
  } else {
    clearInterval(timer)
    const notification = new Notification("ACABOU")
    pling_audio.play()
    //console.log("acabou.")
  }
}

function iniciar(tempoInicial = 60) {
  tempo = tempoInicial
  tempo_display.textContent = tempo
  titulo.textContent = tempo

  timer = setInterval(tempo_menos_um, 1000)
  console.log("Timer iniciado com tempo:", tempo)
}

function botao() {
  iniciar(300)
}