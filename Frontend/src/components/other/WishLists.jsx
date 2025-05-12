import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export default function WishLists() {
  return (
    <Tooltip arrow title="WishLists">
      <Favorite />
    </Tooltip>
  );
}
