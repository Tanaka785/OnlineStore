import { Box, styled } from "@mui/material";
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
    <StyledBox>
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
        Hello
      </StyledBox>
    </StyledBox>
  );
}
