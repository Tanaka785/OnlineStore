import { Box, Link, Typography } from "@mui/material";

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
        <Link href={link.url}>
          {<Typography variant="body1">{link.label}</Typography>}
        </Link>
      ))}
    </Box>
  );
}
