import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "./Logo";
import SearchField from "./SearchField";

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
