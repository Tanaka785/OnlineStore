import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    color: "#19124f",
    fontFamily: "'Inter', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;
