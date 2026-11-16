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
        "--cols": { xs: 3, sm: 4, md: 6 },
        "--rows": { xs: 4, sm: 3, md: 2 },
        "--gap": { xs: "8px", sm: "12px", md: "16px" },
        "--card-w":
          "calc((min(100vw, 1200px) - 2 * var(--pad-x) - (var(--cols) - 1) * var(--gap)) /var(--cols))",
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: "repeat(var(--cols), minmax(0, 1fr))",
        gridTemplateRows: "repeat(var(--rows), minmax(0, 1fr))",
        gap: "var(--gap)",
        flex: "1 1 auto",
        minHeight: 0,
        maxHeight:
          "calc(var(--rows) * var(--card-w) * 1.25 + (var(--rows) - 1) * var(--gap))",
        "@media (max-height: 500px) and (orientation: landscape)": {
          "--cols": 6,
          "--rows": 2,
          "--gap": "8px",
        },
      }}
    >
      {listedPokemons}
    </Box>
  );
}
