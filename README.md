
# TicTacToe

Simple Tic-Tac-Toe game built with HTML, CSS (Bootstrap) and vanilla JavaScript.

## Live / Run
- Open [index.html](index.html) in a browser (or use VS Code Live Server).

## Features
- Play vs Bot (random moves) or vs another player (toggle with the button).
- Automatic win/draw detection and page refresh on game end.
- Responsive layout using Bootstrap.

## How to Play
- Click an empty square to place your mark.
- The button toggles opponent between Bot and Person.
- The bot plays immediately after the human move when selected.

## Project structure
- [index.html](index.html) — game markup and UI.
- [style.css](style.css) — styling.
- [script.js](script.js) — game logic.

Key functions:
- [`selectSlot`](script.js) — handles player moves, updates UI, and triggers bot moves.
- [`hasWinningCombo`](script.js) — checks for win conditions.
- [`activateSlotsEventListeners`](script.js) — attaches click handlers to board slots.
- [`changeOpponent`](script.js) — toggles opponent mode.

## Contributing
- Fork, modify, and create a PR. Keep UI and logic separated where possible.

## License
- MIT

## Author/Developer 
- Zdravko Georgiev
