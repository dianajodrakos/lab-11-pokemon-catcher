// import functions and grab DOM elements
import { encounterPokemon, capturePokemon, getCapturedTotal, setPokedex, getPokedex, getSessions, setSessions } from './local-storage-utils.js';
import { getRandomPokemon } from './utils.js';

const input1 = document.querySelector('#poke-1');
const input2 = document.querySelector('#poke-2');
const input3 = document.querySelector('#poke-3');
const image1 = document.querySelector('#poke-1-img');
const image2 = document.querySelector('#poke-2-img');
const image3 = document.querySelector('#poke-3-img');
const catchButton = document.querySelector('#capture');
const renderButton = document.querySelector('#render');

// initialize state
renderThreePokemon();

// set event listeners 
catchButton.addEventListener('click', () => {
  // get user input
  let input = document.querySelector('input[type=radio]:checked');
  if (input === null) {
    alert('Choose your pokémon!')
    return;
  }
  const pokemonId = Number(input.value);
  capturePokemon(pokemonId);
  const pokemonCaptured = getCapturedTotal();
  
  if (Number.isInteger(pokemonCaptured / 10)) {

    // const session = getPokedex();
    // let allSessions = getSessions();
    // for (let item of session) {


    // let newSessions = allSessions.push(***);
    // setSessions(newSessions);
    // console.log(session, allSessions, newSessions);
    // setPokedex([]);
    window.location.replace('./results.html');
  } else {
    renderThreePokemon();
    input.checked = false;
  }
});

renderButton.addEventListener('click', () => {
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