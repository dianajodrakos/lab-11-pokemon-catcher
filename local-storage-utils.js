import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) {
        return [];
    }
    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
};

export function setPokedex(pokedex) {
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
};

export function encounterPokemon(pokemonId) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemonId);

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
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemonId);
    matchingPokemon.captured++;
    setPokedex(pokedex);
};
