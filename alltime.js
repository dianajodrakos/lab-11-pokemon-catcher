import { getSessions } from './local-storage-utils.js';
import { mungeCaptured, mungeEncountered, mungeNames, mungeNamesCaptured, mungeColors, mungeColorsCaptured } from './munge.js';

const allSessions = getSessions();
const capturedNamesData = mungeNamesCaptured(allSessions);
const capturedData = mungeCaptured(allSessions);
const capturedColorsData = mungeColorsCaptured(allSessions);
const encounteredData = mungeEncountered(allSessions);
const namesData = mungeNames(allSessions);
const colorsData = mungeColors(allSessions);

console.log(allSessions);

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