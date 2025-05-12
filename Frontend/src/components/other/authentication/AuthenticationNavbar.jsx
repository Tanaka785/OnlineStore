import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function AuthenticationNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginBlock: 2,
      }}
    >
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
    </Box>
  );
}
