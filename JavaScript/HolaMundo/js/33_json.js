'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Avengers',
    year: 2020,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: " Titanic", year: 1996, pais: "Estados Unidos"},
    pelicula
]
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}