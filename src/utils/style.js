export const APP_STYLE = {
  "--pad-x": { xs: "16px", sm: "20px" },
  maxWidth: "1200px",
  height: "100svh",
  my: 0,
  mx: "auto",
  padding: "clamp(12px, 4svh, 40px) var(--pad-x)",
  justifyContent: "center",
  gap: "clamp(10px, 2.5svh, 24px)",
};

export const STATUS_STYLE = {
  m: "auto",
  py: 2,
  px: 3,
  maxWidth: "480px",
  textAlign: "center",
};

export const TITLE_STYLE = {
  "&::after": {
    content: '""',
    display: "block",
    width: "64px",
    height: "6px",
    margin: "clamp(6px, 1.2svh, 10px) auto 0",
    borderRadius: "99px",
    background: (theme) =>
      `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.text.primary} 50%)`,
    "@media (max-height: 500px) and (orientation: landscape)": {
      display: "none",
    },
  },
};

export const GRID_STYLE = {
  "--cols": { xs: 3, sm: 4, md: 6 },
  "--rows": { xs: 4, sm: 3, md: 2 },
  "--gap": { xs: "8px", sm: "12px", md: "16px" },
  "--card-w":
    "calc((min(100vw, 1200px) - 2 * var(--pad-x) - (var(--cols) - 1) * var(--gap)) /var(--cols))",
  listStyle: "none",
  m: 0,
  p: 0,
  display: "grid",
  gridTemplateColumns: "repeat(var(--cols), minmax(0, 1fr))",
  gridTemplateRows: "repeat(var(--rows), minmax(0, 1fr))",
  gap: "var(--gap)",
  flex: "1 1 auto",
  minHeight: 0,
  maxHeight:
    "calc(var(--rows) * var(--card-w) * 1.25 + (var(--rows) - 1) * var(--gap))",
  "@media (max-height: 500px) and (orientation: landscape)": {
    "--cols": 6,
    "--rows": 2,
    "--gap": "8px",
  },
};
