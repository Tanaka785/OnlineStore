import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../shared/Navbar/Logo";
import NavIcons from "../../shared/Navbar/NavIcons";

function CartNavbar() {
  return (
    <AppBar position="static" sx={{}}>
      <Toolbar>
        <IconButton
          edge="start"
          color="secondary.main"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="secondary.main"
          aria-label="search"
          sx={{ mr: 2 }}
        >
          <SearchIcon fontSize="medium" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <NavIcons />
      </Toolbar>
    </AppBar>
  );
}

export default CartNavbar;
