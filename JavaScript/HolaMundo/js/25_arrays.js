'use strict'

// Arrays, Arreglos, Matrices
// Generalmente son una coleccion de datos agrupados

var nombre = "Carlos Torres";
var nombres = ["Carlos Torres","Catalina Rosas","Jose Torres","Wendy Torres", 20, true];

var lenguajes = new Array("PHP","JS","GO","JAVA","C#","C","C++");

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length );
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/


document.write("<h1> Lenguajes de programación del 2018 </h1>");
document.write("<ul>");

/*
for(var i = 0;  i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

/*
lenguajes.forEach((elemento, indice) => {
    document.write("<li>"+ indice + " - " + elemento +"</li>");

})
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

// Busquedas dentro de un array

var precios = [10,20,50,5,90];

var busqueda = lenguajes.find(lenguaje => lenguaje == "C");

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "C");

var busqueda_precios = precios.some(precio => precio >= 20);

console.log(busqueda);
console.log(busqueda_precios);