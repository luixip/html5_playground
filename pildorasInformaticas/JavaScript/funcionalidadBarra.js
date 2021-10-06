var miVideo, reproducir, barra, progreso;

function comenzar() {
  miVideo = document.getElementById("miVideo");
  reproducir = document.getElementById("reproducir");
  barra = document.getElementById("barra");
  progreso = document.getElementById("progreso");

  reproducir.addEventListener("click", clicando, false);

  progreso.addEventListener("click", adelantando, false);
}

function clicando() {
  if (miVideo.paused == false && miVideo.ended == false) {
    miVideo.pause();
    reproducir.innerHTML = "Play";
  } else {
    miVideo.play();
    reproducir.innerHTML = "Pause";
  }
}

function adelantando() {}

window.addEventListener("load", comenzar, false);
