import Card from "../Card";
import WinnerScreen from "../WinnerScreen";

export default function Grid({
  pokemons,
  handleClick,
  isLoading,
  score,
  handleReplay,
}) {
  const listedPokemons = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
  ));

  if (isLoading) {
    return (
      <p className="status" role="status">
        Loading Pokémon...
      </p>
    );
  } else if (score === pokemons.length) {
    return <WinnerScreen handleReplay={handleReplay} />;
  } else {
    return <ul className="grid">{listedPokemons}</ul>;
  }
}
