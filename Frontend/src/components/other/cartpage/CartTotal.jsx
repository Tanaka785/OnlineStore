import React from 'react';
import { Box, Typography } from '@mui/material';

const cartItems = [
  { id: 1, name: 'Product A', price: 25.00, quantity: 2 },
  { id: 2, name: 'Product B', price: 12.50, quantity: 1 },
  { id: 3, name: 'Product C', price: 50.00, quantity: 1 },
];

function CartTotal() {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Box sx={{ mt: 4, textAlign: 'right' }}>
      <Typography variant="h6">
        Total: ${total.toFixed(2)}
      </Typography>
    </Box>
  );
}

export default CartTotal; 