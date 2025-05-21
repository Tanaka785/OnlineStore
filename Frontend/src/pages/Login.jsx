import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import AuthHeading from "../components/other/authentication/signup/Promo";
import { SIGNUP } from "../constants/routes";
import { Box, Link, Typography } from "@mui/material";
import CenteredBox from "../components/other/authentication/signup/CenteredBox";
import StandardTextField from "../components/other/authentication/signup/authentication-fields/StandardTextField";

export default function LoginPage() {
  return (
    <AuthBox>
      <AuthenticationNavbar authLink="Signup" />

      <AuthCenteredBox>
        <AuthenticationHeader />
        <AuthHeading
          primaryText="Login"
          secondaryText={
            <>
              Need an account?{" "}
              <Link href={SIGNUP}>
                <b>Sign Up</b>
              </Link>
            </>
          }
        />
        <CenteredBox sx={{ marginBlock: 8 }}>
          <StandardTextField label="Email or Username" />
          <StandardTextField label="Password" />
          <Typography
            component="div"
            sx={{
              display: "flex",
              width: "100%",
              border: "1px solid blue",
              justifyContent: "flex-end",
            }}
          >
            Lost Password?
          </Typography>
        </CenteredBox>
      </AuthCenteredBox>
    </AuthBox>
  );
}
