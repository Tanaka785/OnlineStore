import React from "react";
import Login from "./pages/Login";
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
        </Routes>
      </Router>
    </React.Fragment>
  );
}