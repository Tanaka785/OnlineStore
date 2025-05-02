import { AppBar, Link, Box } from "@mui/material";

export default function SignupNavbar() {
  return (
    <AppBar>
      <Box sx={{ marginLeft: "auto"}}>
        <Link>Sell Your Designs</Link>
        <Link>Login</Link>
      </Box>
    </AppBar>
  );
}
