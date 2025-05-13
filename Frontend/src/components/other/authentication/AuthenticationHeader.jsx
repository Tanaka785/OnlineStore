import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../shared/Navbar/Logo";
import Cart from "../../shared/Cart.jsx";

import OutlinedTextField from "../../shared/OutlinedTextField.jsx";

export default function AuthenticationHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginTop: 1,
      }}
    >
      <AppBar position="static" sx={{ width: "100%", color: "primary.main" }}>
        <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <Box sx={{ width: "700px" }}>
            <OutlinedTextField />
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <Cart />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
