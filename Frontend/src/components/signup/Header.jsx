import { Box, TextField } from "@mui/material";
import Logo from "../common/logo/Logo";
import { ShoppingBag } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";
export default function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderBottom: ` 1px solid ${alpha(theme.palette.divider, 0.05)}`,
      }}
    >
      <Logo />
      <TextField />
      <ShoppingBag />
    </Box>
  );
}
