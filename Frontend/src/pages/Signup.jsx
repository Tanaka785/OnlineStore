import { Box, Typography, styled } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";
import { useTheme } from "@emotion/react";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function Signup() {
  const theme = useTheme();

  return (
    <Box>
      <StyledBox>
        <SignupNavbar />
        <Header />
      </StyledBox>
      <StyledBox
        gap={3}
        sx={{
          placeItems: "center",
          marginTop: 12,
        }}
      >
        <Typography variant="h5">Join Webvibes</Typography>
        <Typography variant="body1" sx={{ width: "35%" }}>
          Sign up as a customer for 25% off your first order. Your coupon will
          be emailed after sign up.
        </Typography>
      </StyledBox>
    </Box>
  );
}
