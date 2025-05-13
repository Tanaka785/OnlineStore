import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../../shared/Navbar/Logo.jsx";
import Cart from "../../../shared/Cart.jsx";
import { useTheme } from "@emotion/react";

import OutlinedTextField from "../../../shared/OutlinedTextField.jsx";

export default function AuthenticationHeader() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          color: "primary.main",
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBlock: 1,
        }}
      >
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
