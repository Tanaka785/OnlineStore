import { AppBar, Link, Box, styled } from "@mui/material";
import { useTheme } from "@emotion/react";

const StyledNavLink = styled(Link)(({ theme }) => ({
//   color: theme.palette.text.primary,
}));

export default function SignupNavbar() {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.text.primary,
      }}
    >
      <Box
        gap={2}
        sx={{ display: "flex", marginLeft: "auto", marginRight: "1%" }}
      >
        <StyledNavLink href="about/selling">Sell Your Designs</StyledNavLink>
        <StyledNavLink href="auth/login">Login</StyledNavLink>
      </Box>
    </AppBar>
  );s
}
