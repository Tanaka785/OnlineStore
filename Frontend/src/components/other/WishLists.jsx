import { Favorite, ShoppingCart } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { WISHLISTS } from "../../constants/routes";

export default function WishLists() {
  return (
    <Tooltip arrow title="WishLists">
      <IconButton component="a" href={`${WISHLISTS}`}>
        <Favorite />
      </IconButton>
    </Tooltip>
  );
}
