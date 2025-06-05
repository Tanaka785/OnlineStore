import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function CartNavbar() {
  return (
    <AppBar position="static" sx={{}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Cart
        </Typography>
        {/* Add other cart navigation elements here */}
      </Toolbar>
    </AppBar>
  );
}

export default CartNavbar;
