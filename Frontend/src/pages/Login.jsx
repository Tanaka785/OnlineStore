import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import AuthHeading from "../components/other/authentication/signup/Promo";
import { SIGNUP } from "../constants/routes";
import { Link, Typography } from "@mui/material";
import CenteredBox from "../components/other/authentication/signup/CenteredBox";

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
          <Typography>
            <b>Authentication Fields.</b>
          </Typography>
        </CenteredBox>
      </AuthCenteredBox>
    </AuthBox>
  );
}
