import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../../shared/Navbar/Logo.jsx";
import Cart from "../../../shared/Cart.jsx";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "../../../../constants/routes";

import OutlinedTextField from "../../../shared/OutlinedTextField.jsx";

export default function AuthenticationHeader() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (searchTerm.trim()) {
      navigate(`${SEARCH}?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          color: "primary.main",
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBlock: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <Box sx={{ width: "700px" }}>
            <form onSubmit={handleSearchSubmit} style={{ width: "100%" }}>
              <OutlinedTextField
                placeholderText="Search for products or designs"
                value={searchTerm}
                onChange={handleSearchChange}
                onSearchClick={handleSearchSubmit}
              />
            </form>
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <Cart />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
