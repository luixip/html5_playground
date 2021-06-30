
function cargando() {
    alert("Cargando ...!");
}

function saludo (){
    alert("Hola mundo");
}

function ejecuta (){
    for (var i=0; i<3; i++) {
        document.getElementsByTagName("p")[i].onclick=saludo;
        // document.getElementById("verde").onclick=saludo;
    }
}

function ejecuta2 (){
    tope = document.getElementsByClassName("importante").length;
    for (var i=0; i<tope; i++) {
        var z=document.getElementsByClassName("importante")[i].onclick=saludo;
    }
}

window.onload = ejecuta2;



