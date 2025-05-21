import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import AuthHeading from "../components/other/authentication/signup/Promo";
import { SIGNUP } from "../constants/routes";
import { Box, FormControl, Link, Typography } from "@mui/material";
import CenteredBox from "../components/other/authentication/signup/CenteredBox";
import StandardTextField from "../components/other/authentication/signup/authentication-fields/StandardTextField";
import { styled, useTheme } from "@mui/material/styles";
import SubmitButton from "../components/other/authentication/signup/authentication-fields/SubmitButton";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

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
          <FormControl
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <StandardTextField label="Email or Username" />
            <StandardTextField label="Password" />
            <StyledTypography
              component="div"
              sx={{
                justifyContent: "flex-end",
                marginTop: 4,
              }}
            >
              <Link href="#">Lost Password?</Link>
            </StyledTypography>
            <Typography
              component="div"
              variant="body2"
              sx={{
                textAlign: "center",
                marginTop: 4,
              }}
            >
              By clicking Log In, you agree to our User Agreement
            </Typography>
            <SubmitButton
              text="Log In"
              disabled={false}
              sx={{ marginTop: 2 }}
            />
          </FormControl>
          <StyledTypography 
            component="div" variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 4,
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </StyledTypography>
        </CenteredBox>
      </AuthCenteredBox>
    </AuthBox>
  );
}
