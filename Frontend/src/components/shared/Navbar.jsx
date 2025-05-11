import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vh" }}>
      <AppBar>
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
