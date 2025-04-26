import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#19124f",
    },
  },
  
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

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#19124f",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          }
        },
      },
    },
  },
});

export default theme;
