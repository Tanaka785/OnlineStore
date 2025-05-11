import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
const navIcons = [
  {
    label: "WishLists",
    icon: "/webvibes.png",
    url: "/lists",
  },
  {
    label: "Cart",
    icon: "/webvibes.png",
    url: "/cart",
  },
];

export default function NavIcons() {
  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <IconButton component={"a"} href={icon.url}>
          <Avatar src={icon.icon} />
        </IconButton>
      ))}
    </Box>
  );
}
