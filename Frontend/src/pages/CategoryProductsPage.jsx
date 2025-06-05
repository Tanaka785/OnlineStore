import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { BASE_URL } from "../constants/urls.js";
import ProductCard from "../components/shared/ProductCard.jsx";
import Navbar from "../components/shared/Navbar/Navbar.jsx";
import CategoryList from "../components/other/homepage/CategoryList.jsx";
import Divider from "../components/other/homepage/Divider.jsx";
import PageContainer from "../components/other/pages/PageContainer.jsx";

function CategoryProductsPage() {
  // Use useParams()['*'] to get the matched path string
  const { "*": categoryPath } = useParams();
  // Extract the last segment of the path as the category name
  const categorySlug = categoryPath ? categoryPath.split("/").pop() : null;

  // Transform the slug to match backend category name format (e.g., 'new-arrivals' -> 'New Arrivals')
  const categoryName = categorySlug
    ? categorySlug
        .split("-") // Split by hyphen
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" ") // Join with space
    : null;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Construct the correct API endpoint using categoryName
        const response = await fetch(
          `${BASE_URL}/products/by_category/?name=${encodeURIComponent(
            categoryName
          )}`
        );

        if (!response.ok) {
          // Check for 404 specifically for no products found
          if (response.status === 404) {
            setProducts([]); // Set products to empty array
            setLoading(false);
            return; // Exit early, not a critical error
          }
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
    <PageContainer>
      <Navbar />
      <CategoryList sx={{ "& .MuiBox-root": { paddingInline: 0 } }} />
      <Divider />
      <Box sx={{ paddingInline: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          Products in {categoryName ? categoryName : "Selected Category"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between"
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
              <Typography variant="h5" color="text.secondary">
                No products found in the "
                {categoryName ? categoryName : "selected"}" category.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </PageContainer>
  );
}

export default CategoryProductsPage;
