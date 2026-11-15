import { Button } from "@mui/material";

export default function WinnerScreen({ handleReplay }) {
  return (
    <div className="winner" role="status">
      <div className="winner-ball" aria-hidden="true"></div>
      <h2 className="winner-title">You caught them all!</h2>
      <p className="winner-text">
        You found every Pokémon without clicking the same one twice.
      </p>
      <Button onClick={handleReplay}>Replay</Button>
    </div>
  );
}
