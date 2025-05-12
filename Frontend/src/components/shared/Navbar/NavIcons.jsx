import { Box, IconButton, Tooltip } from "@mui/material";
import { CART, WISHLISTS } from "../../../constants/routes";
import Cart from "../../other/Cart";
import WishLists from "../../other/WishLists";

const navIcons = [
  {
    label: "WishLists",
    icon: WishLists,
    url: `${WISHLISTS}`,
  },
  {
    label: "Cart",
    icon: Cart,
    url: `${CART}`,
  },
];

export default function NavIcons() {
  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <IconButton
          key={icon.label}
          component="a"
          href={icon.url}
          aria-label={icon.label}
        >
          <icon.icon />
        </IconButton>
      ))}
    </Box>
  );
}
