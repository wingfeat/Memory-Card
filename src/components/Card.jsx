import {
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function Card({ pokemon, handleClick }) {
  return (
    <Box
      component="li"
      sx={{
        minWidth: 0,
        minHeight: 0,
      }}
    >
      <MuiCard
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
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
            src={pokemon.img}
            alt={pokemon.name}
            sx={{
              flex: "1 1 auto",
              minHeight: 0,
              width: "100%",
              maxWidth: "140px",
              objectFit: "contain",
              imageRendering: "pixelated",
            }}
          />
          <Typography
            component="p"
            noWrap
            sx={{
              fontSize: "clamp(0.65rem, 1.6svh, 0.85rem)",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.08em",
              maxWidth: "100%",
              flexShrink: 0,
            }}
          >
            {pokemon.name}
          </Typography>
        </CardActionArea>
      </MuiCard>
    </Box>
  );
}
