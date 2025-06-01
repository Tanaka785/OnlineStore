import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { BASE_URL } from "../../../constants/urls";
import { useNavigate } from "react-router-dom";

const CATEGORIES_API_URL = `${BASE_URL}/products/categories/`;

function CategoryGallery() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORIES_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched categories for gallery:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories for gallery:", error);
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4, px: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ px: 3 }}>
        Category Gallery
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          justifyContent: "space-between",
          px: 3,
        }}
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <Card
              key={category.id}
              sx={{
                width: 400,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <CardMedia
                component="img"
                height="400"
                image={category.image_url || "https://via.placeholder.com/250"} // Assuming category has an image_url field
                alt={category.name}
                sx={{
                  borderRadius: 1.5,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "calc(100% - 16px)",
                  textTransform: "none",
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                Shop {category.name}
              </Button>
            </Card>
          ))
        ) : (
          <Typography>No categories found.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default CategoryGallery;
