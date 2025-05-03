import { AppBar, Link, Box, styled } from "@mui/material";
import { useTheme } from "@emotion/react";

const StyledNavLink = styled(Link)(({ theme }) => ({
  //   color: theme.palette.text.primary,
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
      <Box
        gap={2}
        sx={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "1%",
          height: "100%",
        }}
      >
        <StyledNavLink href="about/selling">Sell Your Designs</StyledNavLink>
        <StyledNavLink href="auth/login">Login</StyledNavLink>
      </Box>
    </AppBar>
  );
  s;
}
