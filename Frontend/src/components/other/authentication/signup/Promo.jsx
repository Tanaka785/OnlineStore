import { Box, Typography } from "@mui/material";

export default function Promo(params) {
  return (
    <Box
      sx={{
        display: "grid",
        marginTop: 10,
        border: "1px solid red",
        placeItems: "center",
        width: "35%",
      }}
    >
      <Typography component={"div"} variant="h5">
        Join WebVibes
      </Typography>
      <Typography component="div" variant="body1" sx={{ textAlign: "center" }}>
        Sign up as a customer for 25% off your first order. Your coupon will be
        emailed after sign up.
      </Typography>
    </Box>
  );
}
