import { Box, Link, Typography } from "@mui/material";
import { SELLING, SIGNUP, LOGIN } from "../../../constants/routes";
import { useAuth } from "../../../utils/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navLinks = [
  {
    label: "Sell Your Designs",
    url: `${SELLING}`,
  },
];

export default function NavLinks() {
  const { authToken } = useAuth();

  return (
    <Box
      sx={{
        marginLeft: 3,
        marginRight: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      {navLinks.map((link) => (
        <Link key={link.label} href={link.url}>
          {
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ fontWeight: "bold" }}
            >
              {link.label}
            </Typography>
          }
        </Link>
      ))}

      {authToken ? (
        <Link href="/account">
          <AccountCircleIcon sx={{ color: "secondary.main" }} />
        </Link>
      ) : (
        <>
          <Link key="Signup" href={SIGNUP}>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ fontWeight: "bold" }}
            >
              Signup
            </Typography>
          </Link>
          <Link key="Login" href={LOGIN}>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ fontWeight: "bold" }}
            >
              Login
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
}
