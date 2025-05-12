import { Box, IconButton, Tooltip } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { CART, WISHLISTS } from "../../../constants/routes";

const navIcons = [
  {
    label: "WishLists",
    icon: Favorite,
    url: `${WISHLISTS}`,
  },
  {
    label: "Cart",
    icon: ShoppingCart,
    url: `${CART}`,
  },
];

export default function NavIcons() {
  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <Tooltip arrow title={icon.label}>
          <IconButton
            key={icon.label}
            component="a"
            href={icon.url}
            aria-label={icon.label}
          >
            <icon.icon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}
