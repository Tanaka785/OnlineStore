import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";
import AuthCenteredBox from "../components/other/authentication/shared/AuthCenteredBox";
import AuthenticationHeader from "../components/other/authentication/shared/AuthenticationHeader";

export default function LoginPage() {
  return (
    <AuthBox>
      <AuthenticationNavbar authLink="Signup" />

      <AuthCenteredBox>
        <AuthenticationHeader />
      </AuthCenteredBox>
    </AuthBox>
  );
}
