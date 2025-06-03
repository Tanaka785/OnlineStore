import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Tooltip,
  styled,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { CATEGORIES_URL, BASE_URL } from "../../../constants/urls";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { SHOP_BASE_ROUTE } from "../../../constants/routes";

// Styled Tooltip content for white background
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    border: "1px solid " + theme.palette.common.white,
    padding: theme.spacing(1),
  },
  "& .MuiTooltip-arrow": {
    color: theme.palette.common.white,
  },
}));

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subcategories, setSubcategories] = useState({}); // State to store subcategories by parent ID
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null); // State to track which category is hovered

  const theme = useTheme();

  // Fetch top-level categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORIES_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched categories:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories when a category is hovered
  const fetchSubcategories = async (categoryId) => {
    // Only fetch if not already loaded for this category
    if (!subcategories[categoryId]) {
      setSubcategories((prev) => ({
        ...prev,
        [categoryId]: { loading: true, data: null, error: null },
      }));
      try {
        const response = await fetch(
          `${BASE_URL}/products/categories/${categoryId}/subcategories/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSubcategories((prev) => ({
          ...prev,
          [categoryId]: { loading: false, data: data, error: null },
        }));
      } catch (error) {
        console.error(
          `Error fetching subcategories for category ${categoryId}:`,
          error
        );
        setSubcategories((prev) => ({
          ...prev,
          [categoryId]: {
            loading: false,
            data: null,
            error: "Failed to load subcategories.",
          },
        }));
      }
    }
  };

  const handleMouseEnter = (categoryId) => {
    setHoveredCategoryId(categoryId);
    fetchSubcategories(categoryId);
  };

  const handleMouseLeave = () => {
    setHoveredCategoryId(null);
  };

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
    <Box
      sx={{
        width: "100%",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          overflowX: "auto",
          justifyContent: "space-between",
          paddingInline: 4,
          alignItems: "center",
        }}
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <StyledTooltip
              key={category.id}
              title={
                subcategories[category.id]?.loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : subcategories[category.id]?.error ? (
                  <Typography color="error">
                    {subcategories[category.id].error}
                  </Typography>
                ) : subcategories[category.id]?.data &&
                  subcategories[category.id].data.length > 0 ? (
                  <Box>
                    <List dense={true} disablePadding={true}>
                      {subcategories[category.id].data.map((sub) => (
                        <ListItemButton
                          key={sub.id}
                          component={Link}
                          to={`${SHOP_BASE_ROUTE}/${category.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")}/${sub.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")}`}
                          sx={{
                            padding: theme.spacing(0.5, 1),
                            "&:hover": {
                              backgroundColor: theme.palette.action.hover,
                            },
                            marginBottom: theme.spacing(2),
                          }}
                        >
                          <Typography variant="body1">{sub.name}</Typography>
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>
                ) : (
                  <Typography variant="body2">No subcategories</Typography>
                )
              }
              arrow
              placement="bottom"
              PopperProps={{
                disablePortal: true,
              }}
              disableFocusListener
              disableTouchListener
            >
              <Link
                to={`${SHOP_BASE_ROUTE}/${category.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  <Typography variant="body1">{category.name}</Typography>
                </Box>
              </Link>
            </StyledTooltip>
          ))
        ) : (
          <Typography>No top-level categories found.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default CategoryList;
