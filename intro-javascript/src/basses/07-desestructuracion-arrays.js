
const personajes = ['Master Chief','Kratos','Mario Bros'];

const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros]= retornaArreglo();

console.log(letras,numeros);

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. El segundo se llamara setNombre
const userState = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

//const arr = userState('ROCATORO');
const [nombre,setNombre] = userState('ROCATORO');

console.log(nombre,setNombre);

setNombre();

//arr[1]();