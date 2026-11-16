import { Box } from "@mui/material";
import Card from "../Card";

export default function Grid({ pokemons, handleClick }) {
  const listedPokemons = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
  ));

  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: "repeat(var(--cols), minmax(0, 1fr))",
        gridTemplateRows: "repeat(var(--rows), minmax(0, 1fr))",
        gap: "var(--gap)",
        flex: "1 1 auto",
        minHeight: 0,
        maxHeight:
          "calc(var(--rows) * var(--card-w) * 1.25 + (var(--rows) - 1) * var(--gap))",
      }}
    >
      {listedPokemons}
    </Box>
  );
}
