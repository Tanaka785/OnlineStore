import React from "react";
import { Box, Typography } from "@mui/material";
import CartNavbar from "../components/other/cartpage/CartNavbar";
import PageContainer from "../components/other/pages/PageContainer";
import CartHeadingAndDivider from "../components/other/cartpage/CartHeadingAndDivider";
import CenteredCartImage from "../components/other/cartpage/CenteredCartImage";

function ShoppingCartPage() {
  return (
    <PageContainer>
      <CartNavbar />
      <CartHeadingAndDivider />

      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <CenteredCartImage />
        {/* Add other shopping cart content here */}
      </Box>
    </PageContainer>
  );
}

export default ShoppingCartPage;
