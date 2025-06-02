import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Assuming product object has an image field */}
      {product.image && (
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: "contain", maxHeight: 140, width: "100%" }}
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
        {product.price !== undefined && (
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mt: 1, fontWeight: "bold" }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
