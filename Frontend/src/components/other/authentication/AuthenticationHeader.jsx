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
        <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
          Hie
        </Toolbar>
      </AppBar>
    </Box>
  );
}
