import { Box, Link, Typography } from "@mui/material";
import { SELLING, SIGNUP, LOGIN } from "../../../constants/routes";

const navLinks = [
  {
    label: "Sell Your Designs",
    url: `${SELLING}`,
  },
  {
    label: "Signup",
    url: `${SIGNUP}`,
  },
  {
    label: "Login",
    url: `${LOGIN}`,
  },
];

export default function NavLinks() {
  return (
    <Box sx={{ marginLeft: 3, marginRight: 2, display: "flex", gap: 2 }}>
      {navLinks.map((link) => (
        <Link key={link.label} href={link.url}>
          {<Typography variant="body1">{link.label}</Typography>}
        </Link>
      ))}
    </Box>
  );
}
