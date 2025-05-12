import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../shared/Navbar/Logo";
import Cart from "../Cart.jsx";

import OutlinedTextField from "../OutlinedTextField";

export default function AuthenticationHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <AppBar position="static" sx={{ width: "100%", color: "primary.main" }}>
        <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <Box sx={{ width: "700px" }}>
            <OutlinedTextField />
          </Box>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
