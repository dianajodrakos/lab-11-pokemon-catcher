import { findById } from './utils.js';
import pokemon from './pokemon.js';

export function mungeNames(pokemonArray) {
    let names = [];
    for (let item of pokemonArray) {
        const nameId = item.id;
        const pokemonData = findById(pokemon, nameId);
        const name = pokemonData.pokemon;
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

export function mungeEncountered(pokemonArray) {
    let encountered = [];
    for (let item of pokemonArray) {
        const encounteredId = item.encountered;
        encountered.push(encounteredId);
    }
    return encountered;
}

export function mungeNamesCaptured(pokemonArray) {
    let names = [];
    for (let item of pokemonArray) {
        const capturedId = item.captured;
        if (capturedId > 0) {
            const nameId = item.id;
            const pokemonData = findById(pokemon, nameId);
            const name = pokemonData.pokemon;
            names.push(name);
        }
    }
    return names;
}

export function mungeColors(pokemonArray) {
    let colors = [];
    for (let item of pokemonArray) {
        const colorId = item.id;
        const pokemonArray = findById(pokemon, colorId);
        const color = pokemonArray.color_1;
        colors.push(color);
    }
    return colors;
}

    export function mungeColorsCaptured(pokemonArray) {
        let colors = [];
        for (let item of pokemonArray) {
            const capturedId = item.captured;
            if (capturedId > 0) {
                const colorId = item.id;
                const pokemonArray = findById(pokemon, colorId);
                const color = pokemonArray.color_1;
                colors.push(color);
            }
        }
        return colors;
    }