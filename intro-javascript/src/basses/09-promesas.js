import {getHeroeById,getHeroeByOwner} from "./basses/08-import-export";

/*
const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // Tarea
        const p1 = getHeroeById(3);
        //console.log(heroe);
        resolve(p1);
        //reject('No se pudo encontrar el heroe');
    },2000);
})

promesa.then((heroe)=>{
    console.log('El heroe es: ',heroe)
}).catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // Tarea
        const p1 = getHeroeById(id);
        //console.log(p1);
        //resolve(p1);
        if(p1){
            resolve(p1);
        }else {
            reject('No se pudo encontrar el heroe');
        }
        //reject('No se pudo encontrar el heroe');
    },2000);
    
})}

getHeroeByIdAsync(3).then(console.log).catch(console.warn);