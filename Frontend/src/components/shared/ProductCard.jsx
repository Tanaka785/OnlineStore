import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export default function ProductCard({ product }) {
  // Attempt to parse price as a float and check if it's a finite number
  const parsedPrice = parseFloat(product.price);
  const isPriceValid = !isNaN(parsedPrice) && isFinite(parsedPrice);

  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {product.image && (
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name || "Unnamed Product"}
        </Typography>
        {product.description && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
        {isPriceValid && (
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mt: 1, fontWeight: "bold" }}
          >
            ${parsedPrice.toFixed(2)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
