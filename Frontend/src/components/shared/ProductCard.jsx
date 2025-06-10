import React, { useState, useEffect } from "react";
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
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useAuth } from "../../utils/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls.js";
import { LOGIN } from "../../constants/routes.js";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const checkIfProductInCart = async () => {
    if (!authToken || !product || !product.id) {
      setIsInCart(false);
      console.log("checkIfProductInCart: No auth token, product, or product ID. isInCart set to false.");
      return;
    }
    try {
      console.log("checkIfProductInCart: Fetching cart...");
      const response = await fetch(`${BASE_URL}/api/cart/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const cartData = await response.json();
        console.log("checkIfProductInCart: Cart data received:", cartData);
        const productInCart = cartData.items.some(
          (item) => item.product.id === product.id
        );
        setIsInCart(productInCart);
        console.log("checkIfProductInCart: Product in cart status:", productInCart);
      } else {
        console.error("checkIfProductInCart: Failed to fetch cart:", response.status);
        setIsInCart(false);
      }
    } catch (error) {
      console.error("checkIfProductInCart: Error fetching cart:", error);
      setIsInCart(false);
    }
  };

  useEffect(() => {
    console.log("useEffect: Running checkIfProductInCart.");
    checkIfProductInCart();
  }, [authToken, product]);

  // Attempt to parse price as a float and check if it's a finite number
  const parsedPrice = parseFloat(product.price);
  const isPriceValid = !isNaN(parsedPrice) && isFinite(parsedPrice);

  const handleAddToCart = async () => {
    console.log("handleAddToCart: Initial isInCart status:", isInCart);
    if (!authToken) {
      navigate(LOGIN);
      console.log("handleAddToCart: No auth token, navigating to login.");
      return;
    }

    try {
      console.log("handleAddToCart: Sending add to cart request for product:", product.id);
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
        console.log("handleAddToCart: Item added to cart successfully!");
        setIsInCart(true);
        console.log("handleAddToCart: isInCart set to true immediately. Re-checking cart status...");
        await checkIfProductInCart();
        console.log("handleAddToCart: After re-check, final isInCart status:", isInCart);
      } else if (response.status === 401) {
        console.error("handleAddToCart: Unauthorized: Please log in.");
        navigate(LOGIN);
      } else {
        const errorData = await response.json();
        console.error("handleAddToCart: Failed to add item to cart:", errorData);
      }
    } catch (error) {
      console.error("handleAddToCart: Error adding item to cart:", error);
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
            {isInCart ? (
              <>
                Remove from cart{" "}
                <CancelOutlinedIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
              </>
            ) : (
              "Add to Cart"
            )}
          </Button>
          <IconButton size="small">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
