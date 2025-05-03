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
        sx={{
          placeItems: "center",
          marginTop: 12,
        }}
      >
        <Typography variant="h6">Join Webvibes</Typography>
        <Typography variant="body1">Hello</Typography>
      </StyledBox>
    </Box>
  );
}
