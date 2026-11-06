import { useState, useEffect } from "react";
import Grid from "./components/Sections/Grid";
import ScoreBoard from "./components/ScoreBoard";
import shuffle from "./utils/shuffle";
import ScreenError from "./components/Sections/ScreenError";
import "./App.css";

const App = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardIds, setCardIds] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonArray = [];

      try {
        for (let i = 1; i <= 12; i++) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`,
          );

          if (!response.ok) {
            throw new Error("Impossible de charger le Pokémon");
          }

          const data = await response.json();

          pokemonArray.push({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
          });
        }
        setPokemons(shuffle(pokemonArray));
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
          <Grid
            handleClick={handleClick}
            pokemons={pokemons}
            isLoading={isLoading}
            score={score}
            handleReplay={handleReplay}
          />
        </>
      ) : (
        <ScreenError />
      )}
    </main>
  );
};

export default App;
