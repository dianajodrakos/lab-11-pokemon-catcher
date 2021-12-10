import { mungeCaptured, mungeEncountered, mungeNames, mungeNamesCaptured, mungeColors, mungeColorsCaptured } from './munge.js';
import { getPokedex, setPokedex } from './local-storage-utils.js';

const pokedex = getPokedex();
const capturedNamesData = mungeNamesCaptured(pokedex);
const capturedData = mungeCaptured(pokedex);
const capturedColorsData = mungeColorsCaptured(pokedex);
const encounteredData = mungeEncountered(pokedex);
const namesData = mungeNames(pokedex);
const button = document.querySelector('#reset');
const colorsData = mungeColors(pokedex);

var ctx = document.getElementById('captured-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: capturedNamesData,
        datasets: [{
            label: 'Pokémon caught',
            data: capturedData,
            backgroundColor: capturedColorsData,
            borderColor: 'grey',
            borderWidth: 2
        }]
    }
});

var ctx2 = document.getElementById('encountered-chart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: namesData,
        datasets: [{
            label: 'Pokémon encountered',
            data: encounteredData,
            backgroundColor: colorsData,
            borderColor: 'grey',
            borderWidth: 2
        }]
    },
});

button.addEventListener('click', () => {
    //redirect to home
    window.location.replace('/');
    //clear local storage
    setPokedex([]);
});