import {
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Card({ pokemon, handleClick }) {
  return (
    <li className="card-item">
      <MuiCard sx={{ width: "100%", height: "100%" }}>
        <CardActionArea
          onClick={() => handleClick(pokemon.id)}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 0.5, sm: 0.75 },
            padding: "clamp(6px, 1.5svh, 16px) 8px",
            "&:active": {
              transform: "translateY(-1px)",
              "@media (prefers-reduced-motion: reduce)": {
                transform: "none",
              },
            },
            "&:focus-visible": {
              outline: (theme) => `3px solid ${theme.palette.primary.main}`,
              outlineOffset: "-3px",
            },
          }}
        >
          <CardMedia
            component="img"
            className="card-img"
            src={pokemon.img}
            alt={pokemon.name}
          />
          <Typography component="p" className="card-name">
            {pokemon.name.toUpperCase()}
          </Typography>
        </CardActionArea>
      </MuiCard>
    </li>
  );
}
