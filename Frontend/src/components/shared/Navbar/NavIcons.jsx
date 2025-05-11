import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";

const navIcons = [
  {
    label: "WishLists",
    image: "/webvibes.png",
    url: "/lists",
  },
  {
    label: "Cart",
    image: "/webvibes.png",
    url: "/cart",
  },
];

export default function NavIcons() {
  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <IconButton component={"a"} href={icon.url}>
          <Avatar src={icon.image} />
        </IconButton>
      ))}
    </Box>
  );
}
