import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function CartNavbar() {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        borderBottom: "1px solid #e0e0e0", // Example border color
        borderTop: "1px solid #e0e0e0", // Example border color
        // The height is controlled by the theme customization now
      }}
    >
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
