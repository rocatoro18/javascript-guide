// Objetos literales

const persona = {
    nombre: 'Roberto',
    apellido: 'Torres',
    edad: 23,
    direccion:{
        ciudad: 'Hermosillo',
        zip:123456,
        lat: 23.324234,
        long: 18.345234
    },
};

//console.table(persona);
console.log(persona);

// NO HACER ESTO PORQUE SE ESTA HACIENDO LA COPIA DE LA REFERENCIA
// EN REACT SE HACE ALGO LLAMADO MUTACIÓN PARA CREAR CLONES
const persona2 = persona;
// SI HACER ESTO CON OPERADOR SPREAD PARA CREAR LA COPIA
const persona3 = {...persona};

persona2.nombre = 'Carlos';

console.log(persona2);
console.log(persona3);