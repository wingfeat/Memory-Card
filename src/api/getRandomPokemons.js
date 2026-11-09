import shuffle from "../utils/shuffle.js";
import { fetchPokemon } from "./fetchPokemon.js";

export default async function getRandomPokemons(pokemonCount, cardsCount) {
  const numbers = [];
  for (let i = 1; i <= pokemonCount; i++) {
    numbers.push(i);
  }
  const randomNumbers = shuffle(numbers).slice(0, cardsCount);

  const promises = randomNumbers.map((number) => fetchPokemon(number));
  return Promise.all(promises);
}
