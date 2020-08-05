'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', () => {
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >= 1 ){
        localStorage.setItem(titulo,titulo);
    }
});

var ul = document.querySelector("#peliculaslist");
for(var index in localStorage){
    if(typeof localStorage[index] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
}

var formularioborrado = document.querySelector("#formBorrarPeliculas");

formularioborrado.addEventListener('submit', () => {
    var titulo = document.querySelector('#borrarPelicula').value;
    if(titulo.length >= 1 ){
        localStorage.removeItem(titulo);
    }
});