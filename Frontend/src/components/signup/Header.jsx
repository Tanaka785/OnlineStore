import { Box, IconButton, SvgIcon, TextField, Tooltip } from "@mui/material";
import Logo from "../common/logo/Logo";
import { ShoppingBag } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";
import CartIcon from "../../icons/NavCart.svg?react";

const text = "Search for products or designs";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        paddingBlock: 2,
        width: "100%",
      }}
    >
      <Logo />
      <TextField
        placeholder={text}
        sx={{
          width: "650px",
          "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
          backgroundColor: theme.palette.grey[50],
          borderRadius: 3,
        }}
      />
      <Tooltip
        title="Cart"
        slotProps={{
          tooltip: {
            sx: {
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.background.paper,
              borderRadius: 50,
            },
          },
        }}
      >
        <IconButton component={"a"} href="/cart">
          <SvgIcon
            component={CartIcon}
            inheritViewBox
            sx={{ width: 40, height: 40, color: theme.palette.text.primary }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
