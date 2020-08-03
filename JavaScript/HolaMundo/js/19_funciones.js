'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1,numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
}

function porPantalla(numero1,numero2){
    document.write("Suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("Multiplicación: " + (numero1*numero2)+"<br/>");
    document.write("División: " + (numero1/numero2)+"<br/>");
    
}

function calculadora(numero1,numero2,mostrar = false){
    // Conjunto de instrucciones

    if(mostrar == 0){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
     return true;
}

// console.log(calculadora());


// Invocar o llamar a la funcion
calculadora(12,8);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/