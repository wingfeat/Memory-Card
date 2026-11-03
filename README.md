# Pokémon Memory

A memory card game built with React for [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) curriculum (Full Stack JavaScript path).

Click each Pokémon **only once**. Every click shuffles the cards: if you click a Pokémon you have already chosen, your score goes back to zero. Can you click all twelve?

## Features

- **12 Pokémon** loaded from the [PokéAPI](https://pokeapi.co/) when the app starts
- **Current score and best score**, updated live
- **Cards shuffled** on load and after every click, with the Fisher-Yates algorithm
- **Loading and error states** while the data is fetched, or if the API cannot be reached
- **Keyboard friendly**: every card is a real button
- **Responsive grid** that adapts to any screen size

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [PokéAPI](https://pokeapi.co/)

## Component structure

```
App                ← fetches the Pokémon on mount and owns all the state
├── ScoreBoard     ← displays the current score and the best score
├── Grid           ← displays the cards
│   └── Card × 12  ← displays one Pokémon and reports the click
└── ScreenError    ← shown if the API cannot be reached
```

All the state lives in `App`, the common parent of `ScoreBoard` and `Grid`:

| State | Value |
| --- | --- |
| `pokemons` | the list of cards `{ id, name, img }` |
| `score` / `bestScore` | numbers |
| `cardIds` | the ids of the cards already clicked |
| `isLoading` / `hasError` | booleans |

When a card is clicked, `Card` calls a function passed down from `App` through `Grid`, with the Pokémon's id.

## What I learned

- **`useEffect`** to fetch data when the component mounts, with an empty dependency array to run it only once, and an `async` function declared inside the effect
- **`try` / `catch` / `finally`** to handle errors and end the loading state in every case
- **Passing data up**: a child component calls a function received as a prop, with an argument
- **Never mutating state**: creating new arrays with the spread syntax (`[...cardIds, id]`) instead of using `push`
- **State is a snapshot**: a new value is only available on the next render, so the new score is computed in a variable first
- **The `key` prop**: it goes on the element returned by `map`, so React can track each card when the list is shuffled
- **The Fisher-Yates shuffle**, written as a pure function that never modifies the array it receives

## Getting started

```bash
git clone https://github.com/wingfeat/Memory-Card.git
cd Memory-Card
npm install
npm run dev
```
