import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import Promo from "../components/other/authentication/signup/Promo";
import UserCategory from "../components/other/authentication/signup/UserCategory";
import AuthenticationFields from "../components/other/authentication/signup/authentication-fields/AuthenticationFields";
import AuthFooter from "../components/other/authentication/footer/AuthFooter";
import TermsAndAgreements from "../components/other/authentication/signup/TermsAndAgreement";
import { useState } from "react";

export default function SignupPage() {
  const [selectedCategory, setSelectedCategory] = useState("Customer");

  return (
    <Box sx={{ display: "grid", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <AuthenticationNavbar authLink="Login" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <AuthenticationHeader authLink="Login" />
        <Promo />
        <UserCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AuthenticationFields />
        <TermsAndAgreements />
        <AuthFooter />
      </Box>
    </Box>
  );
}
