'use strict'

// LocalStorage

// COMPROBAR SI EL LOCAL STORAGE ESTA DISPONIBLE
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");
}

// Guardar datos
localStorage.setItem("titulo","JavaScript");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Carlos Torres",
    email: "rocatoro18@outlook.com",
    web: "rocatoro.com"
};

// Convertir a objeto json en forma de string
localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(" " + userjs.nombre + " " + userjs.email);

// Eliminar el local storage
localStorage.removeItem("usuario");
localStorage.clear();