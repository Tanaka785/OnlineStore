import { Box, Link } from "@mui/material";

const navLinks = [
  {
    label: "Sell Your Designs",
    url: "/about/selling",
  },
  {
    label: "Signup",
    url: "/signup",
  },
  {
    label: "Login",
    url: "/auth/login",
  },
];

export default function NavLinks() {
  return (
    <Box>
      <Link href="#">Hello</Link>
    </Box>
  );
}
