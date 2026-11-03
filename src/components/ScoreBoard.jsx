export default function ScoreBoard({ score, bestScore }) {
  return (
    <div>
      <p>Current score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}
