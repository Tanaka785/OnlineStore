import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        width: 350,
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
            width: 200,
            height: 200,
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
        {typeof product.price === "number" && (
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
