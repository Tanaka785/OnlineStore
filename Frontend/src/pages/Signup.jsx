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
        <Typography variant="h1" sx={{ fontSize: "1.5rem" }}>
          Join Webvibes
        </Typography>
        <Typography>Hello</Typography>
      </StyledBox>
    </Box>
  );
}
