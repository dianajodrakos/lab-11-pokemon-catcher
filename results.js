import { mungeCaptured, mungeNames, mungeNamesCaptured } from './munge.js';
import { getPokedex, setPokedex } from './local-storage-utils.js';
import pokemon from './pokemon.js';

const pokedex = getPokedex();
const namesData = mungeNamesCaptured(pokedex, pokemon);
const capturedData = mungeCaptured(pokedex);
const button = document.querySelector('#reset');

var ctx = document.getElementById('captured-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namesData,
        datasets: [{
            label: 'pokemon caught',
            data: capturedData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Captured'
                },
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

button.addEventListener('click', () => {
    //redirect to home
    window.location.replace('/');
    //clear local storage
    setPokedex([]);
});