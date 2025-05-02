import { AppBar, Link, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function SignupNavbar() {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ marginLeft: "auto", marginRight: "1%" }}>
        <Link>Sell Your Designs</Link>
        <Link>Login</Link>
      </Box>
    </AppBar>
  );
}
