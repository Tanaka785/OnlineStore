import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Selling from "./pages/Selling";
import Wishlists from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/Home";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about/selling" element={<Selling />} />
          <Route path="/lists" element={<Wishlists />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}