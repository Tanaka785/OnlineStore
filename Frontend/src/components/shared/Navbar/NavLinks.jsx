import { Box, Typography } from "@mui/material";
import { SELLING, SIGNUP, LOGIN } from "../../../constants/routes";
import { useAuth } from "../../../utils/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import MuiLink from "@mui/material/Link";

const navLinks = [
  {
    label: "Sell Your Designs",
    url: `${SELLING}`,
  },
];

const StyledTypography = styled(Typography)(({ theme }) => ({
  // ... existing code ...
}));

export default function NavLinks() {
  const { authToken, user, logout } = useAuth();

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
        <MuiLink
          key={link.label}
          component={RouterLink}
          to={link.url}
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          {link.label}
        </MuiLink>
      ))}

      {authToken ? (
        <MuiLink
          onClick={logout}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <AccountCircleIcon sx={{ color: "secondary.main" }} />
        </MuiLink>
      ) : (
        <>
          <MuiLink
            key="Signup"
            component={RouterLink}
            to={SIGNUP}
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "secondary.main",
              fontWeight: "bold",
            }}
          >
            Signup
          </MuiLink>
          <MuiLink
            key="Login"
            component={RouterLink}
            to={LOGIN}
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "secondary.main",
              fontWeight: "bold",
            }}
          >
            Login
          </MuiLink>
        </>
      )}
    </Box>
  );
}
