//import {heroes} from './data/heroes';
//import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';

//console.log(heroes);

//console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeById(3));

export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner );
}


//console.log(getHeroeByOwner('Marvel'));