// Arreglo - Coleccion de informacion que se encuentra dentro de una misma variable

/*
const arreglo = new Array(100);
arreglo.push(1);
*/
const arreglo = [1,2,3,4,5];

/* NO ES RECOMENDABLE USAR EL PUSH PARA INSERTAR ALGO
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
*/

// Operador spread
let arreglo2 = [...arreglo,6];
//arreglo2.push(6);

const arreglos3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglos3);