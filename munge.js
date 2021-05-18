import { findById } from './utils.js';

export function mungeNames(pokemonArray, pokemon) {
    let names = [];
    for (let item of pokemonArray) {
        const nameId = item.id;
        const pokemonArray = findById(pokemon, nameId);
        const name = pokemonArray.pokemon;
        names.push(name);
    }
    return names;
}

export function mungeCaptured(pokemonArray) {
    let captured = [];
    for (let item of pokemonArray) {
        const capturedId = item.captured;
        if (capturedId > 0) {
            captured.push(capturedId);
        }
    }
    return captured;
}

export function mungeNamesCaptured(pokemonArray, pokemon) {
    let names = [];
    for (let item of pokemonArray) {
        const capturedId = item.captured;
        if (capturedId > 0) {
            const nameId = item.id;
            const pokemonArray = findById(pokemon, nameId);
            const name = pokemonArray.pokemon;
            names.push(name);
        }
    }
    return names;
}