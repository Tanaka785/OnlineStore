import React from "react";
import { Box } from "@mui/material";
import cartImage from "../../../assets/cart/cartimage.jpg"; 

function CenteredCartImage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", 
        flexGrow: 1, 
      }}
    >
      <img
        src={cartImage}
        alt="Shopping Cart"
        style={{
          maxWidth: "15%", 
          maxHeight: "15%", 
          objectFit: "contain", 
        }}
      />
    </Box>
  );
}

export default CenteredCartImage;
