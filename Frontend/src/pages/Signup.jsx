import { Box } from "@mui/material";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import Promo from "../components/other/authentication/signup/Promo";
import UserCategory from "../components/other/authentication/signup/UserCategory";
import AuthenticationFields from "../components/other/authentication/signup/authentication-fields/AuthenticationFields";
import AuthFooter from "../components/other/authentication/footer/AuthFooter";
import TermsAndAgreements from "../components/other/authentication/signup/TermsAndAgreement";
import { useState } from "react";
import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";

export default function SignupPage() {
  const [selectedCategory, setSelectedCategory] = useState("Customer")

  return (
    <AuthBox>
      <AuthenticationNavbar authLink="Login" />

      <AuthCenteredBox>
        <AuthenticationHeader authLink="Login" />
        <Promo />
        <UserCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AuthenticationFields
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <TermsAndAgreements />
      </AuthCenteredBox>

      <AuthFooter />
    </AuthBox>
  );
}
