import { getPokedex, setPokedex, encounterPokemon, capturePokemon } from '../local-storage-utils.js';

const test = QUnit.test;

// getPokedex
test('getPokedex: get current pokedex array from local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokedex = [
        {
            id: 1,
            captured: 1,
            encountered: 2,
        },
        {
            id: 2,
            captured: 0,
            encountered: 3,
        },
    ];

    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const localStoragePokedex = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(localStoragePokedex, pokedex);
});


// setPokedex
test('setPokedex: set current pokedex array to local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokedex = [
        {
            id: 1,
            captured: 2,
            encountered: 4,
        },
        {
            id: 2,
            captured: 1,
            encountered: 6,
        },
    ];
    setPokedex(pokedex);

    const stringyPokedex = localStorage.getItem('POKEDEX');
    const newPokedex = JSON.parse(stringyPokedex);
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(newPokedex, pokedex);
});


// encounterPokemon
test('encounterPokemon: encounter a pokemon already in local storage and increment encounter value', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let pokedex = [
        {
            id: 1,
            captured: 2,
            encountered: 4,
        },
        {
            id: 2,
            captured: 1,
            encountered: 6,
        },
    ];
    setPokedex(pokedex);

    const expected = [
        {
            encountered: 5,
            captured: 2,
            id: 1,
        },
        {
            encountered: 6,
            captured: 1,
            id: 2,
        },
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(1);
    const actual = getPokedex(pokedex);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// encounterPokemon
test('encounterPokemon: encounter a new pokemon and return a new Pokemon array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokedex = [];
    setPokedex(pokedex);
    const expected = [
        {
        captured: 0,
        encountered: 1,
        id: 3,
        }
    ];

    
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(3)
    const newPokedex = getPokedex();
    const actual = newPokedex;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// capturePokemon
test('capturePokemon: capture a pokemon and increment capture value', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokedex = [
        {
            captured: 0,
            encountered: 1,
            id: 3,
        }
    ];

    const expected = [
        {
            captured: 1,
            encountered: 1,
            id: 3,
        }
    ];
    setPokedex(pokedex);

    
    //Act 
    // Call the function you're testing and set the result to a const
    capturePokemon(3)
    const newPokedex = getPokedex();
    const actual = newPokedex;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

