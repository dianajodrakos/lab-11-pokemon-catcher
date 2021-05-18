// import functions and grab DOM elements
import { encounterPokemon, capturePokemon } from './local-storage-utils.js';
import { getRandomPokemon } from './utils.js';

const input1 = document.querySelector('#poke-1');
const input2 = document.querySelector('#poke-2');
const input3 = document.querySelector('#poke-3');
const image1 = document.querySelector('#poke-1-img');
const image2 = document.querySelector('#poke-2-img');
const image3 = document.querySelector('#poke-3-img');
const button = document.querySelector('#capture');

// initialize state
renderThreePokemon();

// set event listeners 
button.addEventListener('click', () => {
  // get user input
  const input = document.querySelector('input[type=radio]:checked');
  const pokemonId = Number(input.value);
  console.log(input, pokemonId);

  // use user input to update state 
  capturePokemon(pokemonId);

  // update DOM to reflect the new state
  renderThreePokemon();
});



function renderThreePokemon() {
  let poke1 = getRandomPokemon();
  let poke2 = getRandomPokemon();
  let poke3 = getRandomPokemon();

  while (
    poke1.id === poke2.id 
    || poke1.id === poke3.id 
    || poke2.id === poke3.id
    ) {
    poke1 = getRandomPokemon();
    poke2 = getRandomPokemon();
    poke3 = getRandomPokemon();
  }

  // change pokedex
  encounterPokemon(poke1.id);
  encounterPokemon(poke2.id);
  encounterPokemon(poke3.id);

  //manipulate DOM (images + radio buttons)
  image1.src = poke1.url_image;
  image2.src = poke2.url_image;
  image3.src = poke3.url_image;
  input1.value = poke1.id;
  input2.value = poke2.id;
  input3.value = poke3.id;
};

