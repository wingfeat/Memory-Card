# Pokémon Memory

A memory card game built with React for [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) curriculum (Full Stack JavaScript path).

Click each Pokémon **only once**. Every click shuffles the cards: if you click a Pokémon you have already chosen, your score goes back to zero. Can you click all twelve?

## Features

- **12 random Pokémon** drawn from the 151 of the first generation, with no duplicates
- **New Pokémon on every game**: the Replay button draws a fresh set
- **Fast loading**: the 12 requests to the [PokéAPI](https://pokeapi.co/) are sent in parallel
- **Current score and best score**, updated live
- **Cards shuffled** after every click, with the Fisher-Yates algorithm
- **Winner screen** with a Replay button when every Pokémon has been found
- **Loading and error states** while the data is fetched, or if the API cannot be reached
- **Fits on one screen**: the layout adapts to phones, tablets and large screens (`svh` units), without scrolling
- **Keyboard friendly**: every card is a real button
- **Tested** with Vitest and React Testing Library

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [PokéAPI](https://pokeapi.co/)
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project structure

```
src/
├── api/
│   ├── fetchPokemon.js       ← fetches one Pokémon and returns { id, name, img }
│   └── getRandomPokemons.js  ← draws random numbers and loads them with Promise.all
├── utils/
│   └── shuffle.js            ← Fisher-Yates shuffle, returns a new array
├── components/
│   ├── ScoreBoard.jsx        ← current score and best score
│   ├── Card.jsx              ← one Pokémon, reports the click
│   ├── WinnerScreen.jsx      ← victory message and Replay button
│   └── Sections/
│       ├── Grid.jsx          ← the list of cards
│       └── ScreenError.jsx   ← shown if the API cannot be reached
└── App.jsx                   ← owns the state and decides what to display
```

All the state lives in `App`:

| State | Value |
| --- | --- |
| `pokemons` | the list of cards `{ id, name, img }` |
| `score` / `bestScore` | numbers |
| `cardIds` | the ids of the cards already clicked |
| `isLoading` / `hasError` | booleans |

`App` chooses what to display: the loading message, the winner screen (when `score === pokemons.length`) or the grid. The data access lives in `api/`, so components never call `fetch` directly.

## Tests

```bash
npm test
```

| File | What is tested |
| --- | --- |
| `ScoreBoard.test.jsx` | the scores received as props are displayed |
| `Card.test.jsx` | a click calls `handleClick` with the Pokémon's id (mock function) |
| `WinnerScreen.test.jsx` | the Replay button calls `handleReplay` |
| `App.test.jsx` | loading, error screen, score after a click, defeat and victory, with the API mocked |

The API module is replaced with `vi.mock`, so the tests run without a network connection and always get the same Pokémon.

## What I learned

- **`useEffect`** to fetch data when the component mounts, with an `async` function declared inside the effect
- **`try` / `catch` / `finally`** to handle errors and end the loading state in every case
- **`Promise.all`** to send several independent requests at the same time
- **Separating data and display**: the API calls live in their own files, outside the components
- **Passing data up**: a child component calls a function received as a prop, with an argument
- **Never mutating state**: creating new arrays with the spread syntax instead of using `push`
- **State is a snapshot**: a new value is only available on the next render, so the new score is computed in a variable first
- **The `key` prop**: it goes on the element returned by `map`, so React can track each card when the list is shuffled
- **Derived values**: the victory is computed from the state (`score === pokemons.length`), with no extra state
- **Testing React components** with React Testing Library: finding elements by role, simulating clicks with `user-event`, waiting with `findBy`
- **Mocking** with Vitest: `vi.fn()` for callbacks, `vi.mock()` for modules, `mockResolvedValue` and `mockRejectedValue` to simulate the API
- **Responsive layout** with `svh` units and CSS custom properties

## Getting started

```bash
git clone https://github.com/wingfeat/Memory-Card.git
cd Memory-Card
npm install
npm run dev
```
