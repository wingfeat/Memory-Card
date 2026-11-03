import Card from "../Card";

export default function Grid({ pokemons }) {
  const listedPokemons = pokemons.map((pokemon) => <Card pokemon={pokemon} />);

  return <div>{listedPokemons}</div>;
}
