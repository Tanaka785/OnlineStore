import { AppBar, Box, Toolbar } from "@mui/material";
import SearchField from "./SearchField";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vh",
      }}
    >
      <AppBar>
        <Toolbar
          sx={{ alignItems: "center", color: "primary.main", marginBlock: 1 }}
        >
          <Logo />
          <SearchField />
          <NavLinks />
          <NavIcons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
