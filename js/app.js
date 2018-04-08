// Card List
let list = document.getElementsByClassName("card");
console.log(list);

//List of Child Card Classes
let child = document.getElementsByClassName("list");
console.log(child);

//Push the HTMLCollection from child into array childName
let childName = [];
for (let i = 0; i < child.length; i++){
  childName.push(child[i]);
}
console.log(childName);

//Event listener for reload button
let restart = document.querySelector(".restart");
restart.addEventListener('click', function() {
  window.location.reload();
  console.log("Page refreshed");
  // newClasses();
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

//Function to remove old classes and add new class names to children
  //Remove old Classes
function newClasses() {
  for (let old = 0; old < child.length; old++){
    child[old].classList.remove(child[old]);
  }
  //Calls the Shuffle Function to Shuffle the childName Array
  childName = shuffle(childName);
  console.log(childName);
  //Adds classes from childName to child
  for(let blank = 0; blank < child.length; blank++){
    for(let n = 0; n < childName.length; n++){
      child[blank].classList.add(childName[n]);
    }
  }
}
newClasses();

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
