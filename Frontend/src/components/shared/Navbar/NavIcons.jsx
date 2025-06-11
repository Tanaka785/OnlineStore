import { Box, IconButton, Tooltip } from "@mui/material";
import { CART, WISHLISTS, LOGIN } from "../../../constants/routes";
import Cart from "../Cart";
import WishLists from "../WishLists";
import { useAuth } from "../../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const navIcons = [
  {
    label: "WishLists",
    icon: WishLists,
    route: WISHLISTS,
  },
  {
    label: "Cart",
    icon: Cart,
    route: CART,
  },
];

export default function NavIcons() {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const handleIconClick = (route) => {
    if (route === CART && !authToken) {
      navigate(LOGIN);
    } else {
      navigate(route);
    }
  };

  return (
    <Box sx={{ marginInline: 2, display: "flex", gap: 2 }}>
      {navIcons.map((icon) => (
        <IconButton key={icon.label} onClick={() => handleIconClick(icon.route)}>
          <icon.icon />
        </IconButton>
      ))}
    </Box>
  );
}
