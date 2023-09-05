
// Funciones en JS
// HACER LAS FUNCIONES DE ESTA FORMA PARA QUE
// NO SUCEDA LO DE ASIGNAR UN NUMERO A UNA FUNCION
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludarLambda = (nombre)=>{return `Hola, ${nombre}`};


const saludarLambda2 = (nombre)=> `Hola, ${nombre}`;

const HolaMundo = ()=> `Hola Mundo`;
//saludar = 18;

//console.log(saludar('Roberto'));

console.log(saludar);
console.log(saludarLambda('Carlos'));
console.log(saludarLambda2('Rober'));
console.log(HolaMundo());

const getUser = () => {
    return {
        uid: 'RCTR18',
        username: 'rocatoro'
    }
};

// REGRESAR OBJETO SIN RETURN UTILIZAR () REGRESAR OBJETO DE MANERA IMPLICITA
const getUser1 = () => ({
        uid: 'RCTR18',
        username: 'rocatoro'
});

const user = getUser1();

console.log(getUser());

console.log(user);

// Tarea
// 1.- TRANSFORMAR A FUNCION DE FLECHA
// 2.- TIENE QUE RETORNAR OBJETO IMPLICITO
// 3.- PROBAR
const getUsuarioActivo = (nombre)=>({
        uid: 'ABC123',
        username:nombre
    });

const usuarioActivo = getUsuarioActivo('ROCA');
console.log(usuarioActivo);