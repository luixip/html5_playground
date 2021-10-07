var miVideo;
var reproducir;
var barra;
var progreso;
var maximo = 577;

function comenzar() {
  miVideo = document.getElementById("miVideo");
  reproducir = document.getElementById("reproducir");
  barra = document.getElementById("barra");
  progreso = document.getElementById("progreso");

  reproducir.addEventListener("click", clicando, false);
  barra.addEventListener("click", posicionVideo, false);
}

function clicando() {
  if (miVideo.paused == false && miVideo.ended == false) {
    miVideo.pause();
    reproducir.innerHTML = "Play";
  } else {
    miVideo.play();
    reproducir.innerHTML = "Pause";
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (miVideo.ended == false) {
    var total = parseInt((miVideo.currentTime * maximo) / miVideo.duration);

    progreso.style.width = total + "px";
  }
}

function posicionVideo(posicion) {
  if (miVideo.paused == false && miVideo.ended == false) {
    var ratonX = posicion.pageX - barra.offsetLeft;
    var nuevoTiempo = (ratonX * miVideo.duration) / maximo;

    miVideo.currentTime = nuevoTiempo;
    progreso.style.width = ratonX + "px";
  }
}

window.addEventListener("load", comenzar, false);
