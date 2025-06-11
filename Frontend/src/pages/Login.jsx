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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import PageContainer from "../components/other/pages/PageContainer";
import { useAuth } from "../utils/AuthContext.jsx";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
const isUsername = (val) => /^[A-Za-z0-9_-]{3,20}$/.test(val);

const loginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Email or Username is required")
    .max(50, "Email or Username must be less than 30 characters")
    .refine((val) => isEmail(val) || isUsername(val), {
      message: "Must be a valid email or username",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/,
      "Password must contain at least one letter, one number and one special character"
    ),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setApiError("");
    try {
      const payload = {
        username: data.emailOrUsername,
        password: data.password,
      };

      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let responseData = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      if (response.status === 200) {
        console.log("Login successful");
        login(responseData.access, responseData.user);
        navigate("/");
      } else {
        let errorMsg = "Login failed. Please try again.";
        if (typeof responseData === "string" && responseData.trim() !== "") {
          errorMsg = responseData;
        } else if (
          responseData &&
          (responseData.detail || responseData.message)
        ) {
          errorMsg = responseData.detail || responseData.message;
        } else if (responseData && typeof responseData === "object") {
          const firstError = Object.values(responseData)[0];
          errorMsg = Array.isArray(firstError) ? firstError[0] : firstError;
        }
        setApiError(errorMsg);
      }
    } catch (error) {
      setApiError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <PageContainer>
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
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
            >
              <fieldset
                disabled={isSubmitting}
                style={{ border: "none", width: "100%" }}
              >
                <FormControl
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {apiError && (
                    <Alert severity="error" sx={{ mb: 2, textAlign: "center" }}>
                      {apiError}
                    </Alert>
                  )}
                  <StandardTextField
                    {...register("emailOrUsername")}
                    label="Email or Username"
                    type="text"
                    error={!!errors.emailOrUsername}
                    helperText={errors.emailOrUsername?.message}
                  />
                  <StandardTextField
                    {...register("password")}
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
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
                    text={isSubmitting ? "Logging In..." : "Log In"}
                    disabled={false}
                    sx={{ marginTop: 2 }}
                  />
                </FormControl>
              </fieldset>
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
    </PageContainer>
  );
}
