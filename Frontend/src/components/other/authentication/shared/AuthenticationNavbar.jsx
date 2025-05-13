import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { LOGIN, SELLING } from "../../../../constants/routes";

export default function AuthenticationNavbar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.grey[50],
          color: "primary.main",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "100%",
              marginLeft: "auto",
              marginRight: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={`${SELLING}`}>Sell Your Designs</Link>
            <Link href={`${LOGIN}`}>Login</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
