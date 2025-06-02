import { AppBar, Box, Toolbar } from "@mui/material";
import SearchField from "./SearchField";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "../../../constants/routes";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
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
            <SearchField value={searchTerm} onChange={handleSearchChange} />
          </form>
          <NavLinks />
          <NavIcons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
