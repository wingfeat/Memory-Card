import { Stack } from "@mui/material";
import ScoreTag from "./ScoreTag";

export default function ScoreBoard({ score, bestScore }) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      useFlexGap
      sx={{
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <ScoreTag score={score} text="Current score" />
      <ScoreTag
        score={bestScore}
        text="Best score"
        sx={{
          borderColor: "secondary.main",
          bgcolor: "secondary.light",
        }}
      />
    </Stack>
  );
}
