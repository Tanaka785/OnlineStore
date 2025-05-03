import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Promo() {
  const theme = useTheme();

  return (
    <Box
      gap={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        marginTop: 12,
      }}
    >
      <Typography
        variant="body1"
        sx={{ letterSpacing: -1, fontSize: "1.5rem" }}
      >
        Join Webvibes
      </Typography>
      <Typography
        variant="body1"
        sx={{ width: "70%", color: theme.palette.grey[800] }}
      >
        Sign up as a customer for 25% off your first order. Your coupon will be
        emailed after sign up.
      </Typography>
    </Box>
  );
}
