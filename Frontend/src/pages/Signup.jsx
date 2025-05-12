import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import AuthenticationNavbar from "../components/other/authentication/AuthenticationNavbar";

export default function SignupPage() {
  return (
    <Box sx={{ display: "grid", width: "100%" }}>
      <AuthenticationNavbar />
    </Box>
  );
}
