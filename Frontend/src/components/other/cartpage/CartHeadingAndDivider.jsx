import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function CartHeadingAndDivider() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Box
          sx={{
            width: "100%",
            borderBottom: `1px solid ${theme.palette.divider}`,
            mt: 1,
            mb: 4,
          }}
        />
      </Box>
    </Box>
  );
}

export default CartHeadingAndDivider;
