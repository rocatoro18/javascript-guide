'use strict'

// Pruebas con Let y Var

// Prueba con var (Es una variable global donde si se modifica su valor cambia de manera global)
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con let (Es una varible con alcance limitado, lo cual quiere decir que solo tendra 
// un alcance en el bloque que este)

var texto = "Carlos Torres";
console.log(texto); // valor Torres

if(true){
    let texto = "Roberto Rosas";
    console.log(texto); // valor Rosas
}

console.log(texto); // valor Torres