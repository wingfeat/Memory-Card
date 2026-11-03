export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p className="score">
        <span className="score-label">Current score</span>
        <strong className="score-value">{score}</strong>
      </p>
      <p className="score score-best">
        <span className="score-label">Best score</span>
        <strong className="score-value">{bestScore}</strong>
      </p>
    </div>
  );
}
