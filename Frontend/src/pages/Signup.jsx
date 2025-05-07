import { Box, Typography, styled } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";
import { useTheme } from "@emotion/react";
import Promo from "../components/signup/Promo";
import UserCategory from "../components/signup/UserCategory";
import SignupFields from "../components/signup/SignupFields/SignupFields";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  border: "1px solid green",
}));

export default function Signup() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <StyledBox>
        <SignupNavbar />
        <Header />
      </StyledBox>
      <StyledBox>
        <Promo />
      </StyledBox>
      <StyledBox>
        <UserCategory />
      </StyledBox>
      <StyledBox>
        <SignupFields />
      </StyledBox>
    </Box>
  );
}
