import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

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
          <SearchIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Cart
        </Typography>
        {/* Add other cart navigation elements here */}
      </Toolbar>
    </AppBar>
  );
}

export default CartNavbar;
