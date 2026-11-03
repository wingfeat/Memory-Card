import { useState, useEffect } from "react";
import Grid from "./components/Sections/Grid";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardIds, setCardIds] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonArray = [];

      for (let i = 1; i <= 12; i++) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`,
          );

          if (!response.ok) throw new Error("Impossible de charger le Pokémon");

          const data = await response.json();

          pokemonArray.push({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
          });
        } catch (error) {
          console.log("Erreur :", error);
        }
      }
      setPokemons(pokemonArray);
    };

    fetchPokemons();
  }, []);

  function handleClick(pokemonId) {
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

  return <Grid handleClick={handleClick} pokemons={pokemons} />;
};

export default App;
