import { Paper, Typography } from "@mui/material";
import { LANDSCAPE_PHONE } from "../utils/mediaQueries.js";

const TAG_STYLE = {
  display: "flex",
  alignItems: "center",
  py: { xs: 0.5, sm: 1 },
  px: { xs: 1.5, sm: 2.5 },
  m: 0,
  gap: { xs: 1, sm: 2 },
  borderRadius: (theme) => theme.shape.borderPill,
  [LANDSCAPE_PHONE]: {
    py: 0.5,
    px: 1.5,
  },
};

export default function ScoreTag({ text, score, sx, ...rest }) {
  return (
    <Paper
      variant="outlined"
      component="p"
      sx={{ ...TAG_STYLE, ...sx }}
      {...rest}
    >
      <Typography
        variant="overline"
        sx={{
          letterSpacing: "0.06em",
          fontWeight: 600,
          color: "text.secondary",
        }}
      >
        {text}
      </Typography>
      <Typography
        component="strong"
        sx={{
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {score}
      </Typography>
    </Paper>
  );
}
