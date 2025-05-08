import { Box, Typography, styled } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";
import { useTheme } from "@emotion/react";
import Promo from "../components/signup/Promo";
import UserCategory from "../components/signup/UserCategory";
import SignupFields from "../components/signup/SignupFields/SignupFields";

const CenterAlignedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

const StyledBox = styled(Box)({});
export default function Signup() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", height: "100%", display: "grid" }}>
      <Box sx={{ width: "100%", display: "flex" }}>
        <SignupNavbar />
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Header />
      </Box>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <CenterAlignedBox>
          <Promo />
        </CenterAlignedBox>
        <CenterAlignedBox>
          <UserCategory />
        </CenterAlignedBox>
        <CenterAlignedBox>
          <SignupFields />
        </CenterAlignedBox>
      </Box>
    </Box>
  );
}
