import Card from "../Card";

export default function Grid({ pokemons, handleClick }) {
  const listedPokemons = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
  ));

  return <ul>{listedPokemons}</ul>;
}
