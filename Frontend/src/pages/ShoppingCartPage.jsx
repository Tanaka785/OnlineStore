import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CartNavbar from "../components/other/cartpage/CartNavbar";
import PageContainer from "../components/other/pages/PageContainer";
import CartHeadingAndDivider from "../components/other/cartpage/CartHeadingAndDivider";
import CenteredCartImage from "../components/other/cartpage/CenteredCartImage";
import CartItemsDisplay from "../components/other/cartpage/CartItemsDisplay";
import CartTotal from "../components/other/cartpage/CartTotal";
import { useAuth } from "../utils/AuthContext";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

function ShoppingCartPage() {
  const { authToken, logout } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      if (!authToken) {
        setLoading(false);
        // If no token, and somehow user is here (e.g. direct access), redirect to login
        navigate(LOGIN);
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/cart/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Assuming the API returns an object with a 'items' array, or directly the array of items
          setCartItems(data.items || []);
        } else if (response.status === 401) {
          // Token is invalid/expired for this specific request. Let AuthContext handle refresh/logout.
          console.error(
            "Authentication required for cart data. AuthContext will handle it."
          );
        } else {
          setError("Failed to fetch cart data.");
          console.error(
            "Failed to fetch cart data:",
            response.status,
            await response.text()
          );
        }
      } catch (err) {
        setError("An error occurred while fetching cart data.");
        console.error("Error fetching cart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [authToken, logout, navigate]);

  if (loading) {
    return (
      <PageContainer>
        <CartNavbar />
        <CartHeadingAndDivider />
        <Box sx={{ padding: 2, flexGrow: 1 }}>
          <Typography>Loading cart...</Typography>
        </Box>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <CartNavbar />
        <CartHeadingAndDivider />
        <Box sx={{ padding: 2, flexGrow: 1 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <CartNavbar />
      <CartHeadingAndDivider />

      <Box sx={{ padding: 2, flexGrow: 1 }}>
        {cartItems.length === 0 ? (
          <CenteredCartImage />
        ) : (
          <>
            <CartItemsDisplay cartItems={cartItems} />
            <CartTotal cartItems={cartItems} />
          </>
        )}
        {/* Add other shopping cart content here */}
      </Box>
    </PageContainer>
  );
}

export default ShoppingCartPage;
