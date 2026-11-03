export default function Card({ pokemon }) {
  return (
    <li key={pokemon.id}>
      <button>
        <p>{pokemon.name.toUpperCase()}</p>
        <img src={pokemon.img} alt={pokemon.name} />
      </button>
    </li>
  );
}
