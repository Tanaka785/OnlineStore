import { Box, TextField } from "@mui/material";
import Logo from "../common/logo/Logo";
import { ShoppingBag } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";

const text = "Search for products or designs";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: ` 1px solid ${alpha(theme.palette.divider, 0.05)}`,
        paddingBlock: 2,
      }}
    >
      <Logo />
      <TextField
        placeholder={text}
        sx={{
          width: "650px",
          "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
        }}
      />
      <ShoppingBag />
    </Box>
  );
}
