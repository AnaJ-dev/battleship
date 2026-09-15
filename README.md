# Battleship

A browser-based implementation of the classic Battleship game, built with vanilla JavaScript and tested with Jest.

## How it works

- Player and computer ships are placed automatically and randomly when the page loads.
- Click a cell on the enemy board to attack; hits and misses are shown with color-coded feedback.
- The computer takes a turn automatically after each of your moves.
- The game ends when one side's ships are all sunk.

## Project structure

- `ship.js` — Ship factory (length, hits, sunk status)
- `gameboard.js` — Board state, ship placement, attack handling
- `playerlogic.js` — Player/computer turn logic
- `gameflow.js` — Overall game state and win conditions
- `dom.js` — Rendering and DOM event handling
- `index.html` / `styles.css` — Page markup and styling
- `*.test.js` — Jest unit tests for each module

## Getting started

Install dependencies:

npm install

Run the dev server (via Parcel):

npm start

Run the test suite with coverage:

npm test

## Tech stack

- Vanilla JavaScript
- Parcel (bundler/dev server)
- Jest (testing)
