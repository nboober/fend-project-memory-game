// Create a list that holds all of your cards
let list = document.getElementsByClassName("card");
console.log(list);

let child = document.getElementsByClassName("list");
console.log(child);

//Event listener for reload button
let restart = document.querySelector(".restart");
restart.addEventListener('click', function() {
  window.location.reload();
  console.log("Page refreshed");
//The Array List is automatically shuffled when the page is refreshed
  list = shuffle(list);
  console.log(list);
});

// Page Load Prompt. Starts the game by giving the player 3 seconds to memorize the cards before they flip over again.
function ready() {
  let confirmation = confirm(`You ready to play? \nYou will have 3 seconds to memorize the cards. Good Luck!`);
  if (confirmation === true){
    //Adds Class to show all the cards.
    for(let l = 0; l < list.length; l++){
      list[l].classList.add("show", "open");
    }
    //Removes Class that shows all Cards after 3 seconds.
  setTimeout( function hideCards() {
    for(let l = list.length-1; l >= 0; l--){
    list[l].classList.remove("show", "open");
      }
    }, 3000);
  }
}

//Flips the Cards when they are clicked on
for (let cards = 0; cards < list.length; cards++){
  list[cards].addEventListener('click', function(event){
    console.log("Flipping Card");
    event.target.classList.add("show", "open");






  });
}



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
