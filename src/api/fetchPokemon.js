export default async function fetchPokemon(number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);

  if (!response.ok) {
    throw new Error("Impossible de charger le Pokémon");
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    img: data.sprites.front_default,
  };
}
