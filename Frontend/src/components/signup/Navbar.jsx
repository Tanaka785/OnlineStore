import { AppBar, Link, Box, styled, Toolbar } from "@mui/material";
import { useTheme } from "@emotion/react";

const StyledNavLink = styled(Link)(({ theme }) => ({
  letterSpacing: -0.5,
}));

export default function SignupNavbar() {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "1%",
          height: "100%",
          gap: 2,
        }}
      >
        <StyledNavLink href="about/selling">Sell Your Designs</StyledNavLink>
        <StyledNavLink href="auth/login">Login</StyledNavLink>
      </Toolbar>
    </AppBar>
  );
  s;
}
