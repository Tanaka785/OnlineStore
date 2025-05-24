import { Box, IconButton, Tooltip } from "@mui/material";
import { CART, WISHLISTS } from "../../../constants/routes";
import Cart from "../Cart";
import WishLists from "../WishLists";

const navIcons = [
  {
    label: "WishLists",
    icon: WishLists,
  },
  {
    label: "Cart",
    icon: Cart,
  },
];

export default function NavIcons() {
  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <icon.icon key={icon.label} />
      ))}
    </Box>
  );
}
