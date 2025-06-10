import { AppBar, Box, Toolbar } from "@mui/material";
import SearchField from "./SearchField";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "../../../constants/routes";
import { useAuth } from "../../../utils/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { LOGIN } from "../../../constants/routes";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
        flexGrow: 1,
        width: "100%",
        height: "90px",
      }}
    >
      <AppBar sx={{ backgroundColor: "#fff" }}>
        <Toolbar
          sx={{ alignItems: "center", color: "primary.main", marginBlock: 2 }}
        >
          <Logo />
          <form
            onSubmit={handleSearchSubmit}
            style={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <SearchField
              value={searchTerm}
              onChange={handleSearchChange}
              onSearchClick={handleSearchSubmit}
              placeholderText="Search for products, brands, or designs"
            />
          </form>
          <NavLinks />
          <NavIcons />
          {user ? (
            <IconButton color="inherit" onClick={logout}>
              <AccountCircleIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => navigate(LOGIN)}>
              <AccountCircleIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
