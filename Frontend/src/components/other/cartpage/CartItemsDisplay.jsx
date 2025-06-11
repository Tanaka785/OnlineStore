import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function CartItemsDisplay({ cartItems }) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ ml: 1 }}>
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
