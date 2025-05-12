import { Favorite, ShoppingCart } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function WishLists() {
  return (
    <Tooltip arrow title="WishLists">
      <IconButton>
        <Favorite />
      </IconButton>
    </Tooltip>
  );
}
