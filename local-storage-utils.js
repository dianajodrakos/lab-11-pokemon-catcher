import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    const pokedex = JSON.parse(stringyPokedex);
    if (!pokedex) {
        return [];
    }
    return pokedex;
};

export function setPokedex(pokedex) {
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
};

export function encounterPokemon(pokemonId) {
    const pokedex = getPokedex();

    let matchingPokemon = findById(pokedex, pokemonId);

    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newPokemon = {
        id: pokemonId,
        encountered: 1,
        captured: 0,
        }
        pokedex.push(newPokemon);
    }
    setPokedex(pokedex);
};

export function capturePokemon(pokemonId) {

};
