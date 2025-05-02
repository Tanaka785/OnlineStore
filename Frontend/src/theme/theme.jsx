import { createTheme } from "@mui/material";

const textColor = "#19124f";
const tooltipBackgroundColor = "#ffffff";

const theme = createTheme({
  palette: {
    text: {
      primary: textColor,
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
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

  // TODO set consistent height for all appbar of the app.
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: textColor,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: tooltipBackgroundColor,
          color: textColor,
        },
        arrow: {
          color: tooltipBackgroundColor,
        }
      },
    },
  },
});

export default theme;
