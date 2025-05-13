import { ShoppingCart } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { CART } from "../../constants/routes";

export default function Cart() {
  return (
    <Tooltip arrow title="Shopping Cart">
      <IconButton component="a" href={`${CART}`}>
        <ShoppingCart />
      </IconButton>
    </Tooltip>
  );
}
