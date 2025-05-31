import React from "react";
import { Box } from "@mui/material";

function Divider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        // You can add a background color or border here if you like
        backgroundColor: '#f0f0f0',
        marginBlock: 2,
      }}
    />
  );
}

export default Divider;
