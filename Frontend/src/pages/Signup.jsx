import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";
import UserCategory from "../components/other/authentication/signup/UserCategory";
import AuthenticationFields from "../components/other/authentication/signup/authentication-fields/AuthenticationFields";
import AuthFooter from "../components/other/authentication/footer/AuthFooter";
import TermsAndAgreements from "../components/other/authentication/signup/TermsAndAgreement";
import { useState } from "react";
import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";
import AuthHeading from "../components/other/authentication/signup/Promo";

export default function SignupPage() {
  const [selectedCategory, setSelectedCategory] = useState("Customer");

  return (
    <AuthBox>
      <AuthenticationNavbar authLink="Login" />

      <AuthCenteredBox>
        <AuthenticationHeader />
        <AuthHeading
          primaryText="Join WebVibes"
          secondaryText="Sign up as a customer for 25% off your first order. Your coupon will be emailed after sign up."
        />
        <UserCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AuthenticationFields
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />e
        <TermsAndAgreements />
      </AuthCenteredBox>

      <AuthFooter />
    </AuthBox>
  );
}
