
const nombre = 'Roberto';
const apellido = 'Torres';

//const nombreCompleto = nombre + ' ' + apellido;

// Template String
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto en template string:
${getSaludo(apellido)}
`);