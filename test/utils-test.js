import { findById } from '../utils.js';

const test = QUnit.test;

//findById
test('input an array and an id, return the first array that matches the id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const array = [
        {   '_id':'5cef3501ef6005a77cd4fd17',
            'pokemon':'bulbasaur',
            'id':1,
            'species_id':1,
            'height':7,
            'weight':69,
        }
];

    const expected = 
        {   '_id':'5cef3501ef6005a77cd4fd17',
            'pokemon':'bulbasaur',
            'id':1,
            'species_id':1,
            'height':7,
            'weight':69,
        };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//renderThreePokemon

