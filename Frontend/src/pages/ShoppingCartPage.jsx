import React from "react";
import { Box, Typography } from "@mui/material";
import CartNavbar from "../components/other/cartpage/CartNavbar";
import PageContainer from "../components/other/pages/PageContainer";

function ShoppingCartPage() {
  return (
    <PageContainer>
      <CartNavbar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        {/* Add shopping cart content here */}
      </Box>
    </PageContainer>
  );
}

export default ShoppingCartPage;
