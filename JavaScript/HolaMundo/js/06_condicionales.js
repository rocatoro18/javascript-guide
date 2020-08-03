'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad1 = 10;
var edad2 = 12;

var edad = 20;
var nombre = 'Carlos Torres';

/*
// Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if(edad >= 18){
    console.log("Es mayor de edad, tiene "+edad+" años");

    if(edad <= 30){
        console.log("Todavia eres millenial");
    }
    else if(edad >= 70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial");
    }

}
else{
    console.log("Es menor de edad, tiene "+edad+ " años");
}

/*
// Operadores Lógicos
    AND(Y): &&
    OR(Ó): ||
    NEGACIÓN: !
*/

var year = 2018;

// Negación
if(year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

// AND
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}

/*
// Si pasa esto
if(edad1 > edad2){
    // Ejecuta esto
    console.log("Edad uno es mayor que edad dos");
}
else{
    console.log("La edad uno es inferior");
}
*/
