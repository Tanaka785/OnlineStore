import { ShoppingCart } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function Cart() {
  return (
    <Tooltip arrow title="Shopping Cart">
      <IconButton>
        <ShoppingCart />
      </IconButton>
    </Tooltip>
  );
}
