
// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Roberto',
    edad: 23,
    clave: 'RCTR',
};

//const {nombre:nombre2} = persona;

/*
const {edad, nombre, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);
*/
//console.log(persona.edad);
//console.log(persona.clave);

// Desestructuracion Directamente en el Argumento
const userContext = ({clave, nombre, edad, rango = 'Dev'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        age: edad,
        latlng: {
            lat: 18.234234,
            lng: -20.434239
        }
    }
};

const nuevaPersona = userContext(persona);

const {nombreClave, age, latlng} = nuevaPersona;
const {lat,lng} = latlng;

console.log(nombreClave, age);
console.log(lat, lng);
