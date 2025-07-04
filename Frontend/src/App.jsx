import { CssBaseline, Box, Typography } from "@mui/material";
import {
  CART,
  HOME,
  LOGIN,
  SELLING,
  SIGNUP,
  WISHLISTS,
} from "./constants/routes";
import Homepage from "../src/pages/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup.jsx";
import LoginPage from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        <Routes>
          <Route path={HOME} element={<Homepage />} />
          <Route path={SELLING} element={<Homepage />} />
          <Route path={SIGNUP} element={<SignupPage />} />
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={CART} element={<Homepage />} />
          <Route path={WISHLISTS} element={<Homepage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
