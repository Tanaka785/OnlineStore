import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../../utils/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls.js";
import { LOGIN } from "../../constants/routes.js";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { authToken } = useAuth();
  const navigate = useNavigate();

  // Attempt to parse price as a float and check if it's a finite number
  const parsedPrice = parseFloat(product.price);
  const isPriceValid = !isNaN(parsedPrice) && isFinite(parsedPrice);

  const handleAddToCart = async () => {
    if (!authToken) {
      navigate(LOGIN);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1,
        }),
      });

      if (response.status === 200) {
        console.log("Item added to cart successfully!");
        // Optionally, provide user feedback (e.g., a toast notification)
      } else if (response.status === 401) {
        console.error("Unauthorized: Please log in.");
        navigate(LOGIN);
      } else {
        const errorData = await response.json();
        console.error("Failed to add item to cart:", errorData);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer", // Indicate it's interactive
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container for Image and Description Overlay */}
      <Box sx={{ position: "relative" }}>
        {product.image && (
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              filter: isHovered ? "blur(3px)" : "none", // Apply blur on hover
              transition: "filter 0.3s ease-in-out", // Smooth transition for blur
            }}
          />
        )}

        {/* Description Overlay on Hover */}
        {isHovered && product.description && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: 2,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 2s ease-in-out",
              zIndex: 1,
            }}
          >
            <Typography variant="body2">{product.description}</Typography>
          </Box>
        )}
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
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

        {/* Actions: Add to Cart and Wishlist */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
          }}
        >
          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <IconButton size="small">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
