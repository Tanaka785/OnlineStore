import React from 'react';
import { Box, Typography } from '@mui/material';

function CartTotal({ cartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ mt: 4, textAlign: "right" }}>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
    </Box>
  );
}

export default CartTotal; 