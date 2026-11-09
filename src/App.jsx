import { useState, useEffect } from "react";
import Grid from "./components/Sections/Grid";
import ScoreBoard from "./components/ScoreBoard";
import shuffle from "./utils/shuffle.js";
import ScreenError from "./components/Sections/ScreenError";
import WinnerScreen from "./components/WinnerScreen";
import fetchPokemon from "./api/fetchPokemon.js";
import "./App.css";

const POKEMON_COUNT = 151;
const CARDS_COUNT = 12;

const App = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardIds, setCardIds] = useState([]);

  useEffect(() => {
    const numbers = [];

    for (let i = 1; i <= POKEMON_COUNT; i++) {
      numbers.push(i);
    }

    const randomNumbers = shuffle(numbers).slice(0, CARDS_COUNT);

    const fetchPokemons = async () => {
      try {
        const promises = randomNumbers.map((number) => fetchPokemon(number));
        const pokemonArray = await Promise.all(promises);
        setPokemons(pokemonArray);
      } catch (error) {
        setHasError(true);
        console.log("Erreur :", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  function handleClick(pokemonId) {
    setPokemons(shuffle(pokemons));

    if (cardIds.includes(pokemonId)) {
      setScore(0);
      setCardIds([]);
      return;
    }

    const newScore = score + 1;
    setScore(newScore);
    setBestScore(Math.max(newScore, bestScore));
    setCardIds([...cardIds, pokemonId]);
  }

  function handleReplay() {
    setPokemons(shuffle(pokemons));
    setScore(0);
    setCardIds([]);
  }

  let content;
  if (isLoading) {
    content = (
      <p className="status" role="status">
        Loading Pokémon...
      </p>
    );
  } else if (score === pokemons.length) {
    content = <WinnerScreen handleReplay={handleReplay} />;
  } else {
    content = <Grid handleClick={handleClick} pokemons={pokemons} />;
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Pokémon Memory</h1>
        <p className="rules">
          Click each Pokémon only once. The cards shuffle after every click!
        </p>
      </header>

      {!hasError ? (
        <>
          <ScoreBoard score={score} bestScore={bestScore} />
          {content}
        </>
      ) : (
        <ScreenError />
      )}
    </main>
  );
};

export default App;
