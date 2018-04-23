//Global Variables
let startTimer;
let endTimer;
let finalTime;
let time;
let scoreValue = 0;
let selectedCards = [];
let selectedCardPicture = [];
let matchedCards = [];
let first;
let second;
let firstSelectedClass;
let secondSelectedClass;
let won = false;

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
//Timer
function timer(){
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='Timer: '+ sec + " seconds";
        sec++;
        if (won === true) {
            clearInterval(timer);
        }
    }, 1000);
}

//Increments the move counter
function incrementCounter() {
scoreValue++;
document.querySelector(".moves").innerHTML = scoreValue;
console.log(scoreValue + " moves have been made.");
}

//Stars
  //Decrements the star counter at certain intervals of the game
let starContainer = document.querySelector(".stars").children;
console.log(starContainer);
function starDecrement(){
  if(scoreValue === 9){
  starContainer[1].remove();
} else if(scoreValue === 17){
    starContainer[1].remove();
  }
}


//Event listener for reload button
let restart = document.querySelector(".restart");
restart.addEventListener('click', function() {
  window.location.reload();
  console.log("Page refreshed");
});

// Page Load Prompt. Starts the game by giving the player 3 seconds to memorize the cards before they flip over again.
function ready() {
  let confirmation = confirm(`You ready to play? \nYou will have 3 seconds to memorize the cards. Good Luck!`);
  if (confirmation === true){
    timer();
    startTimer = Date.now(); // Starts Timer once confirmation is made to start the game
    console.log(startTimer);
    //Adds Class to show all the cards.
    for(let l = 0; l < list.length; l++){
      list[l].classList.add("show", "open");
    }
    //Removes Class that shows all Cards after 3 seconds.
  setTimeout( function() {
    for(let l = list.length-1; l >= 0; l--){
    list[l].classList.remove("show", "open");
      }
    }, 3000);
    game();
  }
}

//The Game
function game(){
setTimeout(function() {
  document.addEventListener('click', function(event){
    if(event.target.nodeName === 'LI'){
        matchingCards();
      }
    });
  }, 3500);
}

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
  cycleMatched();
}

//Adds match classes to cards in the matchedCards array
function cycleMatched(){
for (let m = 0; m < matchedCards.length; m++){
  matchedCards[m].classList.add("show", "open", "match");
  }
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
  if(selectedCardPicture.length < 2){//When there are less then two cards selected, run the functions that allow the flipping of cards
    flipCards();
    starDecrement();
    selectedCard();
    if(selectedCardPicture.length === 2){ //If the number of cards selected equals 2, run the functionality to assess whether the cards match or not
    incrementCounter();//increment move counter every time 2 cards are flipped
    first = selectedCardPicture[0].classList;
    console.log("Class of first card " + first[1]);
    firstSelectedClass = first[1];
    second = selectedCardPicture[1].classList;
    console.log("Class of Second Card " + second[1]);
    secondSelectedClass = second[1];
        if(firstSelectedClass === secondSelectedClass){ //If  the child class from the first card selected matches the child class from the second card selected the cards match, else they don't match
          //alert("Matched!!");
          console.log("Match");
          pushToMatchedList(); //If the cards match push them to the matchedCards array
          selectedCards = [];
          selectedCardPicture = [];
          first;
          second;
          console.log(matchedCards);
          setTimeout(function() {
            win(); //Whenever 2 cards match the win function is run to check if you beat the game
          }, 1000);

        } else {
          //alert("No Match");
          console.log("No Match");
          setTimeout(function(){//setTimeout created to allow the cards to completely flip before they are flipped back over
            cycleClosed();
            selectedCards = [];
            selectedCardPicture = [];
            first;
            second;
          }, 1000);

          }

    }else if(selectedCards.length > 2){
    alert("Error! Over 3 cards selected. Restart the game.");
      }
    }
  }


//Win function
function win(){
  if (matchedCards.length === 16){
    won = true;
    endTimer = Date.now();//Stop timer once game is won
    finalTime = endTimer - startTimer;
    time = Math.floor(finalTime/1000);//Time converted into seconds
    console.log(endTimer);
    console.log(finalTime);
    console.log(time);

      $('#myModal').modal("show");


      let para = document.createElement("div");
      let modalBody = document.querySelector(".modal-body");
      let br = document.createElement("br");
      let br2 = document.createElement("br");


      let finalScore = document.createTextNode("You beat the game in " + scoreValue + " moves.");
      let displayScore = para.appendChild(finalScore);
      modalBody.appendChild(displayScore);
      modalBody.appendChild(br);

      let finTime = document.createTextNode("You beat the game in only " + time + " seconds.");
      let displayTime = para.appendChild(finTime);
      modalBody.appendChild(displayTime);
      modalBody.appendChild(br2);

      let finalStars = document.createTextNode("You beat the game with " + starContainer.length + " stars remaining.");
      let displayStars = para.appendChild(finalStars);
      modalBody.appendChild(displayStars);
    }
  }
