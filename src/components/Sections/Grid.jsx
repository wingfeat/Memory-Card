import { Box } from "@mui/material";
import Card from "../Card";
import { GRID_STYLE } from "../../utils/style";

export default function Grid({ pokemons, handleClick }) {
  const listedPokemons = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
  ));

  return (
    <Box component="ul" sx={GRID_STYLE}>
      {listedPokemons}
    </Box>
  );
}
