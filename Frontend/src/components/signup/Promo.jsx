import { Box } from "@mui/material";

export default function Promo() {
  return (
    <Box
      gap={2}
      sx={{
        placeItems: "center",
        marginTop: 12,
      }}
    >
      <Typography variant="h5">Join Webvibes</Typography>
      <Typography
        variant="body1"
        sx={{ width: "35%", color: theme.palette.grey[800] }}
      >
        Sign up as a customer for 25% off your first order. Your coupon will be
        emailed after sign up.
      </Typography>
    </Box>
  );
}
