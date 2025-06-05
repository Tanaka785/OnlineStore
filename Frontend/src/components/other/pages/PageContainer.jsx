import React from "react";
import { Box } from "@mui/material";

function PageContainer({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex", // Use flex to allow children to take up space if needed
        flexDirection: "column", // Stack children vertically
      }}
    >
      {children}
    </Box>
  );
}

export default PageContainer;
