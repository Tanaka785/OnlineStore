import { Box } from "@mui/material";
import Navbar from "../components/shared/Navbar/Navbar";
import { Login } from "@mui/icons-material";
import CategoryList from "../components/other/homepage/CategoryList";
// TODO i want to now use localstorage to store access token and refresh token after a successful Login.
// and here is the real functioanlity i need.when a user successfully login, redirect them to the home page,
// then show account icon on the navbar as the first icon on navicons in navicons.jsx file. as long as their access token
// has not expired, show them that account icon.olky.it is like this: when a user is logged in, hide all the nav links that is hideing
// navLinks component.
export default function Homepage() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Navbar />
      <CategoryList />
    </Box>
  );
}
