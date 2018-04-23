# Memory Game Project

## Table of Contents

* [Summary](#Summary)
* [How-To-Play](#How-To-Play)
* [Dependencies](#Dependencies)
* [Contributing](#contributing)

## Summary

This project is a shape matching game. When the player is ready he has 3 seconds to memorize the cards on the board before they are flipped over.
The player flips over two cards at a time. If the cards match then they stay facing up. If they don't match they are flipped face down again.
The game is scored in 3 different ways:
  - A Timer
  - A Move counter
  - A Heart counter

The timer starts as soon as the player starts the game and ends when the player beats the game.
The Move Counter increments for every card that is flipped.
The Heart Counter decrements after a certain number of cards are flipped. The most hearts a player can get is 3 hearts (Less than 18 cards flipped). The least a player can get is zero (Over 33 cards Flipped).

The game is won once the player matches all 16 cards on the board. The player is given the final scores based on the criteria above and an option to try and beat his previous scores.

## How-To-Play

In order to play, this project can be forked at https://github.com/nboober/fend-project-memory-game.git to your own GitHub account.
Once forked to your GitHub account, clone the files into the local repository on your computer that you want to store the files.
Take the index.html file from your local repository after they are downloaded and drag it into an empty browser tab. The Game should appear in the browser.
Once the webpage opens the player will receive a ready prompt. The player must hit ok to start the game.
Match all the cards in order to win.

## Dependencies

This Game is reliant on Bootstrap and JQuery for modals and pictures incorporated into the game. There is no need for the player to have this installed on their computer beforehand. Bootstrap is incorporated directly into the html file with a BootstrapCDN and the JQuery files are included with the other code files.

_Make sure you are using Google Chrome when you play this game. Other browsers may not compatible._

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
