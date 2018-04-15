// Card List
let list = document.querySelectorAll("li.card");
console.log(list);

let deck = document.querySelector("ul.deck");

//function to shuffle cards
  //Turns the list variable of cards into an array and removes the list from the html file
let array = [];
for (let l = 0; l < list.length; l++){
  array.push(list[l]);
  list[l].remove();
}
console.log(array);
  //Shuffles the array of cards using the shuffle function
let shuffled = shuffle(array);
  //Sorts through the newly shuffled cards and appends them to the deck element in the html file
for (let s = 0; s < shuffled.length; s++){
  console.log(shuffled[s]);
  deck.appendChild(shuffled[s]);
}

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

//Global Variables
let scoreValue = 0;
let selectedCards = [];
let selectedCardPicture = [];
let matchedCards = [];
let first;
let second;
let firstSelectedClass;
let secondSelectedClass;

//The Game
  document.addEventListener('click', function(event){
    if(event.target.nodeName === 'LI'){
      flipCards();
      incrementCounter();
      selectedCard();
    //This setTimeout delays the matching function for one second so the cards can flip completely
    setTimeout(function afterCardFlip(){
        matchingCards();
      }, 2000);
      }
    });


//Flips the chosen card
function flipCards(){
selectedCards.push(event.target);
console.log("Flipping Card");
cycleOpen();
}

//Adds card show classes
function cycleOpen(){
for (let s = 0; s < selectedCards.length; s++){
selectedCards[s].classList.add("show", "open");
  }
}

//Removes card show classes
function cycleClosed() {
  for (let s = 0; s < selectedCards.length; s++){
  selectedCards[s].classList.remove("show", "open");
    }
}
//Function to Push matched cards to the Matched array
function pushToMatchedList(){
  for (let s = 0; s < selectedCards.length; s++){
  matchedCards.push(selectedCards[s])
    }
}

//Adds match classes to cards in the matchedCards array
function cycleMatched(){
for (let m = 0; m < matchedCards.length; m++){
  matchedCards[m].classList.add("show", "open", "match");
  }
}
  //Increments the move counter for every card flipped
function incrementCounter() {
scoreValue++;
document.querySelector(".moves").innerHTML = scoreValue;
console.log(scoreValue + " moves have been made.");
}

  //Gets the child class from the cards selected
function selectedCard(){
selectedCardPicture.push(event.target.childNodes[1]);
  console.log(selectedCardPicture);
console.log(selectedCards.length);
console.log("The number of cards selected are " + selectedCards.length);
}

//Matching the 2 child classes from the cards selected
  function matchingCards() {
    if(selectedCardPicture.length === 2){ //If the number of cards selected equals 2, run a nested loop of the class lists from the previous area
    first = selectedCardPicture[0].classList;
    console.log("Class of first card " + first[1]);
    firstSelectedClass = first[1];
    second = selectedCardPicture[1].classList;
    console.log("Class of Second Card " + second[1]);
    secondSelectedClass = second[1];
        if(firstSelectedClass === secondSelectedClass){ //If a class from the first card selected matches a class from the second card selected alert matched, else alert no match
          //alert("Matched!!");
          console.log("Match");
          pushToMatchedList();
          cycleMatched();
          selectedCards = [];
          selectedCardPicture = [];
          first;
          second;
          console.log(matchedCards);
          //Whenever 2 cards match the win function is run to check if you beat the game
          win();
        } else {
          //alert("No Match");
          console.log("No Match");
          cycleClosed();
          selectedCards = [];
          selectedCardPicture = [];
          first;
          second;
          }

    }else if(selectedCards.length > 2){
    alert("Over 3 cards selected");
      }
    }
//Win function
function win(){
  if (matchedCards.length === 16){
    alert("You win!! \n You beat the game in " + scoreValue + " moves.");
    }
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
