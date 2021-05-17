// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { findById } from './utils.js';

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
button.addEventListener('click', () =>  {
  const input = document.querySelector('input[type=radio]:checked');

  // get user input
  
  // use user input to update state 

  // update DOM to reflect the new state

});