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
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navLinks.map((link) => (
        <Link href={link.url}>{link.label}</Link>
      ))}
    </Box>
  );
}
