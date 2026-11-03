export default function Card({ pokemon, handleClick }) {
  return (
    <li className="card-item">
      <button className="card" onClick={() => handleClick(pokemon.id)}>
        <img className="card-img" src={pokemon.img} alt={pokemon.name} />
        <p className="card-name">{pokemon.name.toUpperCase()}</p>
      </button>
    </li>
  );
}
