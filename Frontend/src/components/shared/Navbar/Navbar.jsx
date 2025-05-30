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
        width: "100%",
        height: "90px",
      }}
    >
      <AppBar>
        <Toolbar
          sx={{ alignItems: "center", color: "primary.main", marginBlock: 2 }}
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
