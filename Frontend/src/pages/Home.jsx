import { Box } from "@mui/material";
import Navbar from "../components/shared/Navbar/Navbar";
import { Login } from "@mui/icons-material";
import CategoryList from "../components/other/homepage/CategoryList";
// TODO: After a successful login, save the access token and refresh token to localStorage.
//
// Desired functionality:
// 1. Once the user logs in successfully, redirect them to the home page.
// 2. On the navbar (in navicons.jsx), display the account icon as the first item.
// 3. As long as the access token is valid (not expired), keep showing the account icon.
// 4. When the user is logged in, hide all the nav links that are normally hidden by the navLinks component.

export default function Homepage() {
  return (
    <Box sx={{ width: "100%", height: "100vh", marginInline: 4 }}>
      <Navbar />
      <CategoryList />
    </Box>
  );
}
