# Memory Game Project

## Table of Contents

* [Summary](#Summary)
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

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
