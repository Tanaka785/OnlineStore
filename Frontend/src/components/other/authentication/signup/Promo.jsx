import { Box, Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";

export default function Promo(params) {
  return (
    <CenteredBox sx={{ marginTop: 8 }}>
      <Typography component={"div"} variant="h5">
        Join WebVibes
      </Typography>
      <Typography component="div" variant="body1" sx={{ textAlign: "center" }}>
        Sign up as a customer for 25% off your first order. Your coupon will be
        emailed after sign up.
      </Typography>
    </CenteredBox>
  );
}
