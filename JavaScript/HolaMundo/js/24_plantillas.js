'use strict'

// Plantillas de texto

var nombre = prompt("Nombre");
var apellidos = prompt("Apellidos");

// var texto = "Mi nombre es: "+nombre+"<br/> Mis apellidos son: "+apellidos;

// Para esto se usan las comillas invertidas
var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos}</h3>

`;

document.write(texto);