import { Button, Typography } from "@mui/material";

export default function WinnerScreen({ handleReplay }) {
  return (
    <div className="winner" role="status">
      <div className="winner-ball" aria-hidden="true"></div>
      <Typography variant="h2">You caught them all!</Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        You found every Pokémon without clicking the same one twice.
      </Typography>
      <Button onClick={handleReplay}>Replay</Button>
    </div>
  );
}
