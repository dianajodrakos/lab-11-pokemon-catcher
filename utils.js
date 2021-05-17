export function findById(array, id) {
    const numberId = Number(id);
    for(let item of array) {
        if (item.id === numberId) {
        return item;
    }
    return null;
    }
};

// export function getRandomPokemon();

// export function renderThreePokemon();

