import { Box, Typography, styled } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";
import { useTheme } from "@emotion/react";
import Promo from "../components/signup/Promo";
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
      <StyledBox>
        <Promo />
      </StyledBox>
    </Box>
  );
}
