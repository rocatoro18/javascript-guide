'use strict'

var categorias = ['Acción','Terror','Comedia'];
var peliculas = ['Avengers','La vida es bella','Titanic'];

// Ordenar arrays

// Orden alfabetico
// peliculas.sort();

// Darle la vuelta al array
peliculas.reverse();

console.log(peliculas);

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);


/*
var elemento = "";

do{
    var elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}
while(elemento != "ACABAR");


// Buscar y eliminar un elemento del array

var indice = peliculas.indexOf('ACABAR');
if(indice > -1){
    peliculas.splice(indice,1);
}
*/


// Convertir array a texto

var peliculas_string = peliculas.join();

// Convetir string a array

var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array);



