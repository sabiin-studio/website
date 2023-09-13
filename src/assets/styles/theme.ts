import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#223D2D",
      light: "#D7E2CC",
      A400: "#A4C06B",
    },
    secondary: {
      main: "#E37B7D",
      dark: "#946BA8",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      color: theme.palette.secondary.main,
      fontSize: "96px",
      fontFamily: "Monospace",
    },
    h3: {
      color: theme.palette.secondary.main,
      fontSize: "36px",
      fontFamily: "Monospace",
    },
    h4: {
      color: theme.palette.primary.main,
      fontSize: "24px",
      fontFamily: "Monospace",
    },
  },
});

export default theme;
