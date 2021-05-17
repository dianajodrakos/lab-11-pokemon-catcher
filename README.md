# lab-11-pokemon-catcher
*THE PLAN*


HTML ELEMENTS

- 3 radio buttons: to input selected value into pokedex
- images: to display current encountered pokemon
- button to "throw the pokeball": intialize event listener / catch the selected pokemon / update DOM with new pokemon

EVENTS
- on load
    1. generate 3 pokemon
    1. increment encountered pokemon by 1 (account for first encounter by initializing a new item in the pokedex array)
    1. render images
- on click
    1. get current input value
    1. get current pokedex
    1. figure out ID of input value
    1. increment captured pokemon by 1
    1. generate 3 new pokemon (use while function to avoid duplicates)
    1. increment new encountered pokemon by 1
    1. render new images and radio values to DOM


*QUESTIONS TO ANSWER*
1. WHAT IS YOUR APP STATE? How will you represent it as a view?
    - 2 states: 
        1. initial state: on page load images of 3 random pokemon and empty array OR array from local storage
        2. new state: on button click load 3 new images



1. When will your state change? In response to what user action?
    - on button click: capture current pokemon / udpate pokedex / render new pokemon

1. What pages will need to be created?
    - html:
        1. index
        2. pokedex (tuesday)
    - javascript
        1. utils
        2. local storage
        3. data model

1. What data will need to be saved, updated, and when?
    - pokemon encountered
        1. on page load
        1. on button click
    - pokemon caught
        1. on button click

1. What variables will need to be used to track data?
    - pokedex variable - a string parsed from local storage
    - 

1. What data will need to be saved to local storage?
    - pokedex 