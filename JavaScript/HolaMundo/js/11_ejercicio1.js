'use strict'

/*
    Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales;
    PLUS: Si los valores ingresados no son numeros o son menores que cero, se tiene que volver a ingresar 
    el dato
*/

    var numero1 = parseInt(prompt("Ingresa el primer numero", 0));
    var numero2 = parseInt(prompt("Ingresa el segundo numero",0));

while(numero1 <= 0 || numero2 <= 0 ||  (isNaN(numero1) || isNaN(numero2)) ){
    numero1 = parseInt(prompt("Ingresa el primer numero", 0));
    numero2 = parseInt(prompt("Ingresa el segundo numero",0));
}


console.log("Primer Numero: "+numero1,"Segundo Numero "+numero2);

if(numero1 == numero2){
   alert("Son numeros iguales");
} 
else if(numero1 > numero2){
    alert("El primer numero es mayor")
}
else if(numero2 > numero1){
    alert("El segundo numero es mayor");
}
else{
    alert("Introduce valores numericos");
}