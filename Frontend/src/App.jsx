import { CssBaseline, Box, Typography } from "@mui/material";
import {
  CART,
  HOME,
  LOGIN,
  SELLING,
  SIGNUP,
  WISHLISTS,
  SEARCH,
  SHOP_BASE_ROUTE,
} from "./constants/routes";
import Homepage from "../src/pages/Home.jsx";
import CategoryProductsPage from "./pages/CategoryProductsPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup.jsx";
import LoginPage from "./pages/Login.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import { AuthProvider } from "./utils/AuthContext.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CssBaseline />
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <Routes>
            <Route path={HOME} element={<Homepage />} />
            <Route path={SELLING} element={<Homepage />} />
            <Route path={SIGNUP} element={<SignupPage />} />
            <Route path={LOGIN} element={<LoginPage />} />
            <Route
              path={CART}
              element={
                <PrivateRoute>
                  <ShoppingCartPage />
                </PrivateRoute>
              }
            />
            <Route path={WISHLISTS} element={<Homepage />} />
            <Route path={SEARCH} element={<SearchResultsPage />} />
            <Route
              path={`${SHOP_BASE_ROUTE}/*`}
              element={<CategoryProductsPage />}
            />
          </Routes>
        </Box>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
