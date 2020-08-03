'use strict'

/*
    1.- Pida 6 numeros por pantalla y los meta en un array
    2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
    3.- Ordenarlo y mostrarlo
    4.- Invertir su orden y mostrarlo
    5.- Mostrar cuantos elementos tiene el array
    6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
    (Se valorará el uso de funciones)

*/

function mostrarArray(elementos, texto = ""){
    document.write("<h1>Contenido del array "+texto+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

// Pedir 6 numeros
var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Numero "+(i+1)+ ":",0)));
}

// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

// Mostrar el array en la consola
console.log(numeros);

// Ordenar y mostrar
numeros.sort(function(a,b){return a-b}); // IMPORTANTE Funcion de callback para que muestre los numeros en orden numerica y no en orden alfabetica
mostrarArray(numeros, 'Ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'Invertido');

// Contar elementos
document.write("<h1> El array tiene : "+numeros.length+" elementos </h1>");

// Busqueda
var busqueda = (parseInt(prompt("Busca un numero",0)));

var posicion = numeros.findIndex(numero => numero == busqueda); // IMPORTANTE funcion callback

if(posicion != -1){
    document.write("<hr/><h1> ENCONTRADO </h1>");
    document.write("<h1> Posicion de la busqueda "+posicion+" </h1><hr/>");
}else{
    document.write("<hr/><h1> NO ENCONTRADO </h1><hr/>");
}



