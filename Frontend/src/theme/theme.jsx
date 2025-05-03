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
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          [theme.breakpoints.up("xs")]: {
            minHeight: "56px",
          },
          [theme.breakpoints.up("sm")]: {
            minHeight: "64px",
          },
        }),
      },
    },
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
        },
      },
    },
  },
});

export default theme;
