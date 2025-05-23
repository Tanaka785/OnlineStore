import { Box, Link, Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";

export default function TermsAndAgreements(params) {
  return (
    <CenteredBox sx={{ display: "grid", gap: 3 }}>
      <Typography
        component={"div"}
        variant="body2"
        sx={{ width: "100%", textAlign: "center" }}
      >
        By clicking <i>Sign Up</i>, you agree to our{" "}
        <Link href="#">
          <b>User Agreement</b>
        </Link>{" "}
        and
        <Link href="#">
          <b>&nbsp;Privacy Policy.</b>
        </Link>
      </Typography>
      <Typography
        component={"div"}
        variant="body2"
        sx={{ width: "100%", textAlign: "center" }}
      >
        This site is protected by reCAPTCHA and the Google{" "}
        <Link href="#">
          <b>Privacy Policy</b>{" "}
        </Link>
        and{" "}
        <Link href="#">
          <b>Terms of Service </b>
        </Link>
        apply.
      </Typography>
    </CenteredBox>
  );
}
