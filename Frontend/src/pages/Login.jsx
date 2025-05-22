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
import AuthFooter from "../components/other/authentication/footer/AuthFooter";
import { useForm } from "react-hook-form";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const onSubmit = (data) => {
  console.log(data);
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

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
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <StandardTextField
                {...register("emailOrUsername")}
                label="Email or Username"
              />
              <StandardTextField {...register("password")} label="Password" />
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
          </Box>
          <StyledTypography
            component="div"
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 4,
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </StyledTypography>
        </CenteredBox>
        <AuthFooter />
      </AuthCenteredBox>
    </AuthBox>
  );
}
