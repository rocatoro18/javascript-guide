'use strict'

/*
    Mostrar todos los numeros impares que hay entre dos numeros introducidos por el
    usuario

*/

var numero1 = parseInt(prompt("Introducir el primer numero: ",0));
var numero2 = parseInt(prompt("Introducir el segundo numero: ",0));

while(numero1 < numero2){
    numero1++;

    if( numero1 % 2 != 0){

        console.log(numero1);

    }     
}

/*
for(var i = numero1; i <= numero2; i++){

    if( i%2 != 0){

        console.log(i);

    }    

}
*/