'use strict'

// Bucle While

var year = 2020;

while(year != 1998){
    // Ejecuta esto
    console.log("Estamos en el año: "+year)
    
    if(year == 2000){
        break;
    }

    year--;

}

// Do While

var years = 30;
do{
    alert("Solo cuando sea diferente a 20");
    years--;
} while( years > 25)