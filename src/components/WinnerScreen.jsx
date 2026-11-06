export default function WinnerScreen({ handleReplay }) {
  return (
    <div>
      <p>You have found all the pokemon !!!</p>
      <button onClick={handleReplay}>Replay</button>
    </div>
  );
}
