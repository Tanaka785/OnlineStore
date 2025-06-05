import React from "react";
import { Box, Typography } from "@mui/material";
import CartNavbar from "../components/other/cartpage/CartNavbar";

function ShoppingCartPage() {
  return (
    <Box>
      <CartNavbar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        {/* Add shopping cart content here */}
      </Box>
    </Box>
  );
}

export default ShoppingCartPage;
