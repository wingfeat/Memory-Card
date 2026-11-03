import { useState, useEffect } from "react";
import Grid from "./components/Sections/Grid";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonArray = [];

      for (let i = 1; i <= 12; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();

        pokemonArray.push({
          id: data.id,
          name: data.name,
          img: data.sprites.front_default,
        });
      }
      setPokemons(pokemonArray);
    };

    fetchPokemons();
  }, []);

  return <Grid pokemons={pokemons} />;
};

export default App;
