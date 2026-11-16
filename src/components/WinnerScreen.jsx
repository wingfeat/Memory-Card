import { Button, Paper, Stack, Typography } from "@mui/material";
import { STATUS_STYLE } from "../utils/style.js";

export default function WinnerScreen({ handleReplay }) {
  return (
    <Stack
      component={Paper}
      role="status"
      spacing={1.5}
      elevation={8}
      sx={{
        ...STATUS_STYLE,
        alignItems: "center",
        padding: "clamp(20px, 4svh, 36px) 28px clamp(18px, 3.5svh, 32px)",
        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
      }}
    >
      <div className="winner-ball" aria-hidden="true"></div>
      <Typography variant="h2">You caught them all!</Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        You found every Pokémon without clicking the same one twice.
      </Typography>
      <Button onClick={handleReplay}>Replay</Button>
    </Stack>
  );
}
