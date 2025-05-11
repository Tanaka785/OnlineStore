import { AppBar, Box, Toolbar } from "@mui/material";
import SearchField from "./SearchField";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vh",
      }}
    >
      <AppBar>
        <Toolbar sx={{ alignItems: "center" }}>
          <Logo />
          <SearchField />
          <NavLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
