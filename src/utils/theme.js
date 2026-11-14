import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#d7362b", dark: "#b02a21" },
    secondary: { main: "#ffcb05" },
    text: { primary: "#23242b", secondary: "#6a6c78" },
    background: { default: "#f3f1ec", paper: "#ffffff" },
    divider: "#e2dfd7",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: ["system-ui", '"Segoe UI"', "Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      "@media (max-height: 500px) and (orientation: landscape)": {
        fontSize: "1.4rem",
      },
    },
    body1: {
      fontSize: "clamp(0.8rem, 0.8rem + 0.5vw, 1rem)",
      lineHeight: 1.5,
    },
  },
});

export default theme;
