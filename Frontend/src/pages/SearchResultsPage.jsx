import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/shared/Navbar/Navbar";

export default function SearchResultsPage() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      setSearchTerm(query);
    }
  }, [location.search]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5">Search Results for: {searchTerm}</Typography>
        {/* Product listing will go here */}
      </Box>
    </Box>
  );
}
