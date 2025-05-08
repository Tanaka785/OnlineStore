import { Box, Typography, styled } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";
import { useTheme } from "@emotion/react";
import Promo from "../components/signup/Promo";
import UserCategory from "../components/signup/UserCategory";
import SignupFields from "../components/signup/SignupFields/SignupFields";
import { useState } from "react";

const CenterAlignedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

const FullWidthStyledBox = styled(Box)({
  display: "flex",
  width: "100%",
});
const userCategories = ["Artist", "Customer"];

export const componentGreyColor = "#d3d3d3";

export default function Signup() {
  const [selected, setSelected] = useState(userCategories[0]);
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", height: "100%", display: "grid" }}>
      <FullWidthStyledBox>
        <SignupNavbar />
      </FullWidthStyledBox>
      <FullWidthStyledBox>
        <Header />
      </FullWidthStyledBox>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <CenterAlignedBox>
          <Promo />
        </CenterAlignedBox>
        {/* TODO get rid of the redudancy on passing selected & setSelected. */}
        <CenterAlignedBox>
          <UserCategory selected={selected} setSelected={setSelected} />
        </CenterAlignedBox>
        <CenterAlignedBox>
          <SignupFields selected={selected} setSelected={setSelected} />
        </CenterAlignedBox>
      </Box>
    </Box>
  );
}
