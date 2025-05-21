import { Box } from "@mui/material";
import AuthBox from "../components/other/authentication/shared/AuthBox";
import AuthenticationNavbar from "../components/other/authentication/shared/AuthenticationNavbar";

export default function LoginPage() {

  return (
  <AuthBox>
    <AuthenticationNavbar authLink="Signup" />
  </AuthBox>
  );
}
