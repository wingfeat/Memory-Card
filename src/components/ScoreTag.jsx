import { Paper } from "@mui/material";

const PAPER = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  gap: "10px",
  borderRadius: "99px",
};

export default function ScoreTag({ text, score, sx, ...rest }) {
  return (
    <Paper variant="outlined" component="p" sx={{ ...PAPER, ...sx }} {...rest}>
      <span className="score-label">{text}</span>
      <strong className="score-value">{score}</strong>
    </Paper>
  );
}
