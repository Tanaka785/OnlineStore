import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function AuthenticationHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginBlock: 2,
      }}
    >
      <AppBar position="static" sx={{ width: "100%", color: "primary.main" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "100%",
              marginLeft: "auto",
              marginRight: 4,
            }}
          >
            <Link>Sell Your Designs</Link>
            <Link>Login</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
