import { createTheme } from "@mui/material/styles";
import { LANDSCAPE_PHONE } from "./mediaQueries.js";

const defaultTheme = createTheme();
const SHADOWS = [...defaultTheme.shadows];
SHADOWS[1] = "0 2px 6px rgba(35, 36, 43, 0.06)";
SHADOWS[8] = "0 8px 18px rgba(35, 36, 43, 0.12)";

const theme = createTheme({
  palette: {
    primary: { main: "#d7362b", dark: "#b02a21" },
    secondary: { main: "#ffcb05", light: "#fff8d6" },
    text: { primary: "#23242b", secondary: "#6a6c78" },
    background: { default: "#f3f1ec", paper: "#ffffff" },
    divider: "#e2dfd7",
  },
  shape: {
    borderRadius: 14,
    borderPill: "99px",
  },
  shadows: SHADOWS,
  typography: {
    fontFamily: ["system-ui", '"Segoe UI"', "Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      [LANDSCAPE_PHONE]: {
        fontSize: "1.4rem",
      },
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 800,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "clamp(0.8rem, 0.8rem + 0.5vw, 1rem)",
      lineHeight: 1.5,
    },
    cardName: {
      fontSize: "clamp(0.65rem, 1.6svh, 0.85rem)",
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: "0.08em",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "10px 28px",
          font: "inherit",
          fontWeight: "700",
          borderRadius: theme.shape.borderPill,
          textTransform: "none",
          transition: theme.transitions.create(
            ["transform", "background-color"],
            {
              duration: theme.transitions.duration.shortest,
            },
          ),
          "&:hover": {
            transform: "translateY(-2px)",
            "@media (prefers-reduced-motion: reduce)": {
              transform: "none",
            },
          },
          "&:focus-visible": {
            outline: `3px solid ${theme.palette.secondary.main}`,
            outlineOffset: "3px",
          },
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: `2px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[1],
          transition: theme.transitions.create(
            ["transform", "border-color", "box-shadow"],
            { duration: theme.transitions.duration.shortest },
          ),
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[8],
            "@media (prefers-reduced-motion: reduce)": {
              transform: "none",
            },
          },
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          cardName: "p",
        },
      },
    },
  },
});

export default theme;
