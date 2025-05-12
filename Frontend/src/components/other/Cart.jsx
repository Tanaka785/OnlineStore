import { ShoppingCart } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export default function Cart() {
  return (
    <Tooltip arrow title="Shopping Cart">
      <ShoppingCart />
    </Tooltip>
  );
}
