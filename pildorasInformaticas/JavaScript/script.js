function cargando() {
  alert("Cargando ...!");
}

function saludo() {
  alert("Hola mundo");
}

function ejecuta() {
  for (var i = 0; i < 3; i++) {
    document.getElementsByTagName("p")[i].onclick = saludo;
    // document.getElementById("verde").onclick=saludo;
  }
}

function ejecuta2() {
  var tope = document.getElementsByClassName("importante").length;
  for (var i = 0; i < tope; i++) {
    var z = (document.getElementsByClassName("importante")[i].onclick = saludo);
  }
}

function ejecuta3() {
  /*  document.querySelector("#principal p:last-child").onclick = saludo; */

  var elementos = document.querySelectorAll("#principal p");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].onclick = saludo;
  }
}
window.onload = ejecuta3;
