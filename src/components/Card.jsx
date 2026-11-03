export default function Card({ pokemon, handleClick }) {
  return (
    <li>
      <button onClick={() => handleClick(pokemon.id)}>
        <p>{pokemon.name.toUpperCase()}</p>
        <img src={pokemon.img} alt={pokemon.name} />
      </button>
    </li>
  );
}
