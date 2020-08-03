'use strict'

/*
    Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introducir el primer numero: ",0));
var numero2 = parseInt(prompt("Introducir el segundo numero: ",0));

document.write("<h1> De "+numero1+" a "+numero2+" están estos numeros:</h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}