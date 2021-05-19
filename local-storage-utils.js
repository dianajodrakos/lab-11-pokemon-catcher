import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';
const SESSIONS = 'SESSIONS';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) {
        return [];
    }
    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
}

export function setPokedex(pokedex) {
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function getSessions() {
    const stringyPokedex = localStorage.getItem(SESSIONS);
    if (!stringyPokedex) {
        return [];
    }
    const sessions = JSON.parse(stringyPokedex);
    return sessions;
}

export function setSessions(session) {
    const stringyPokedex = JSON.stringify(session);
    localStorage.setItem(SESSIONS, stringyPokedex);
}

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

export function getCapturedTotal() {
    let total = 0;
    const pokedex = getPokedex();
    for (let item of pokedex) {
        total += item.captured;
    }
    return total;
};

export function getEncounteredTotal() {
    let total = 0;
    const pokedex = getPokedex();
    for (let item of pokedex) {
        total += item.encountered;
    }
    return total;
}