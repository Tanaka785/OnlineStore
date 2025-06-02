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
        {/* Box to hold name and price on the same row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ margin: 0, marginRight: 1, wordBreak: "break-word" }}
          >
            {product.name || "Unnamed Product"}
          </Typography>
          {isPriceValid && (
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ margin: 0, fontWeight: "bold", flexShrink: 0 }}
            >
              ${parsedPrice.toFixed(2)}
            </Typography>
          )}
        </Box>
        {product.description && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
