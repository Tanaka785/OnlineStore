import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import Navbar from "../components/shared/Navbar/Navbar";
import ProductCard from "../components/shared/ProductCard";

export default function SearchResultsPage() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      setSearchTerm(query);
      const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `http://localhost:8000/products/search/?q=${encodeURIComponent(
              query
            )}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          setError(error);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      };
      fetchResults();
    } else {
      setSearchTerm("");
      setSearchResults([]);
      setLoading(false);
      setError(null);
    }
  }, [location.search]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          Search Results for: "{searchTerm}"
        </Typography>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 4 }}>
            Error fetching search results: {error.message}
          </Typography>
        )}
        {!loading &&
          !error &&
          (searchResults.length > 0 ? (
            <Grid container spacing={2}>
              {searchResults.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.id || product.name}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          ) : (
            searchTerm && (
              <Typography sx={{ mt: 4 }}>
                No products found matching "{searchTerm}".
              </Typography>
            )
          ))}
        {!searchTerm && !loading && !error && (
          <Typography sx={{ mt: 4 }}>Please enter a search term.</Typography>
        )}
      </Box>
    </Box>
  );
}
