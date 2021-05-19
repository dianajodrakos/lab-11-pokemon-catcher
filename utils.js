import pokemon from './pokemon.js';

export function findById(array, id) {
    const numberId = Number(id);
    for(let item of array) {
        if (item.id === numberId) {
            return item;
        }
    }
    return null;
};

export function getRandomPokemon() {
    const randomNumber = Math.floor(Math.random() * pokemon.length);
    const randomPokemon = pokemon[randomNumber];
    return randomPokemon;
};

