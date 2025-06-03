import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

function CategoryProductsPage() {
  const { categoryName } = useParams(); // Using category name as per user request
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // TODO: Construct the correct API endpoint using categoryName
        // Example placeholder URL - replace with your actual backend endpoint
        const response = await fetch(
          `/api/products?category=${encodeURIComponent(categoryName)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(`Error fetching products for ${categoryName}:`, err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchProducts();
    }
  }, [categoryName]); // Re-run effect if categoryName changes

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Products in {categoryName}
      </Typography>
      {/* TODO: Display products here */}
      <Box>
        {products.length > 0 ? (
          // Render products - you'll replace this with your product display logic
          <Typography>
            Displaying {products.length} products for category "{categoryName}".
          </Typography>
        ) : (
          <Typography>
            No products found in the "{categoryName}" category.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default CategoryProductsPage;
