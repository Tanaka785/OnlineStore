import { Box, TextField } from "@mui/material";
import Logo from "../common/logo/Logo";
import { ShoppingBag } from "@mui/icons-material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
      <TextField />
      <ShoppingBag />
    </Box>
  );
}
