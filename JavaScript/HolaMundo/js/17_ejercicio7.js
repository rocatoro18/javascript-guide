'use strict'

/*
    Tabla de multiplicar de un numero introducido por pantalla
*/
/*
var numero = parseInt(prompt("Introduce el numero del cual quieres la tabla de multiplicar ",1));

document.write("<h1>Tabla del "+numero+"</h1>");

for(var i = 1; i <= 10; i++){
    document.write(numero+" X "+i+" = "+(numero*i)+"<br/>")
}
*/
document.write("<h1>Tablas de multiplicar </h1>");
for(var i = 1; i <= 10; i++){
    document.write("<h1>Tabla del "+i+"</h1>");
    for(var j = 1; j <= 10; j++){
        document.write(i+" X "+j+" = "+(i*j)+"<br/>")
    }
}
   

