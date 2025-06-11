import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const cartItems = [
  { id: 1, name: "Product A", price: 25.0, quantity: 2 },
  { id: 2, name: "Product B", price: 12.5, quantity: 1 },
  { id: 3, name: "Product C", price: 50.0, quantity: 1 },
];

function CartItemsDisplay() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Your Cart Items
      </Typography>
      <List>
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`$${item.price.toFixed(2)} each`}
              />
              <Typography variant="body1">
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default CartItemsDisplay;
