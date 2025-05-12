import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import Logo from "../../shared/Navbar/Logo";
import SearchField from "../../shared/Navbar/SearchField";
import { ShoppingCart } from "@mui/icons-material";
import OutlinedTextField from "../OutlinedTextField";

export default function AuthenticationHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginBlock: 2,
      }}
    >
      <AppBar position="static" sx={{ width: "100%", color: "primary.main" }}>
        <Toolbar
          sx={{ justifyContent: "center", alignItems: "center", gap: 3 }}
        >
          <Logo />
          <Box>
            <OutlinedTextField />
          </Box>
          <ShoppingCart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
