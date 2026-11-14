import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#ff9800" },
    text: { secondary: "#6a6c78" },
  },
  typography: {
    fontFamily: ["system-ui", '"Segoe UI"', "Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
  },
});

export default theme;
