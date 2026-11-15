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
    h2: {
      fontSize: "clamp(1.4rem, 4.5vw, 2.6rem)",
      fontWeight: 800,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "clamp(0.8rem, 0.8rem + 0.5vw, 1rem)",
      lineHeight: 1.5,
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
          borderRadius: "99px",
          textTransform: "none",
          transition: "background 0.15s ease, transform 0.15s ease",
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
  },
});

export default theme;
