import React from "react";
import { Box } from "@mui/material";
import cartImage from "../../../assets/cart/cartimage.jpg"; // Adjust path if necessary

function CenteredCartImage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%%", // Ensure it takes full width of its container
        flexGrow: 1, // Allow it to take up available vertical space
      }}
    >
      <img
        src={cartImage}
        alt="Shopping Cart"
        style={{
          maxWidth: "100%%", // Prevent image from overflowing
          maxHeight: "100%%", // Prevent image from overflowing
          objectFit: "contain", // Ensure the image scales correctly
        }}
      />
    </Box>
  );
}

export default CenteredCartImage;
