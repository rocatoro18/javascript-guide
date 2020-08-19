'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

// Las comillas invertidas se usan para la interpolación de variable
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
`;

console.log(textoHora);
// Utilización del objeto math
console.log(Math.ceil(Math.random()*10));