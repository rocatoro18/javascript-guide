'use strict'

/*
    Muestre todos los numeros divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Introduce el numero: ",1));

console.log("Numeros divisores de "+numero);
for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i);
    }
}