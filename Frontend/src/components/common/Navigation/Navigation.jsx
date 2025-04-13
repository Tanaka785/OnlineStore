import React, { useState } from "react";

// css file
import './Navigation.css';

// react-router-dom
import { Link } from "react-router-dom";

// MUI Core Components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";

// MUI Icons
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  ShoppingCart,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

// MUI Styling
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    // width: "auto",
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "auto",
  },
  // [theme.breakpoints.up("lg")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "700px",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginTop: 4,
  position: "static",
  backgroundColor: "transparent",
  color: "inherit",
  boxShadow: "none",
  justifyContent: "center",
}));

const StyledListItem = styled(ListItem)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
  })
)

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "40px",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    //   // width: "30ch",
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: "60ch",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width: "70ch",
    // },
  },
}));

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) =>
    setMobileMoreAnchorEl(event.currentTarget);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginTop: 1.5 }}>
      <StyledAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { sm: "block", lg: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <StyledListItem sx={{ border: "none" }}>
                  <ListItemText primary="Hi there!" />
                </StyledListItem>
                <StyledListItem sx={{ borderTop: "none" }}>
                  <ListItemText
                    primary={
                      <Link>
                        <Typography sx={{ fontWeight: "bold"}}>Login</Typography>
                      </Link>
                    }
                  />
                  <ListItemText primary="or" />
                  <ListItemText
                    primary={<Link className="link">Signup</Link>}
                  />
                </StyledListItem>
                <StyledListItem button>
                  <ListItemText primary="Explore" />
                </StyledListItem>
                <StyledListItem button>
                  <ListItemText primary="Clothing" />
                </StyledListItem>
              </List>
            </Box>
          </Drawer>

          <Link className="link" to="/">
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt="Logo"
                src=""
                sx={{
                  backgroundImage: "url(/Logo.png)",
                  backgroundSize: "200%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  mr: 1,
                  width: {
                    xs: 25,
                    sm: 28,
                  },
                  height: {
                    xs: 25,
                    sm: 28,
                  },
                  marginTop: {
                    xs: 0.2,
                    sm: 0.5,
                  },
                }}
              />

              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.55rem",
                  },
                }}
              >
                WEBVIBES
              </Typography>
            </Box>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex"}}>
            <Box sx={{ display: "flex", alignItems: "center"}}>
              <Link className="link">
              <Typography
                variant="body1"
                component="div"
                sx={{ marginRight: 4.5, fontWeight: "bold" }}
              >
                Sell your designs
              </Typography>
            </Link>

            <Link className="link">
              <Typography
                variant="body1"
                component="div"
                sx={{ marginRight: 4.5, fontWeight: "bold" }}
              >
                Login
              </Typography>
            </Link>

            <Link className="link">
              <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Signup
              </Typography>
            </Link>
            </Box>
            {/* wishlist */}
            <Box sx={{ ml: 3}}>
              <IconButton
              // size="large"
              aria-label="Show number of user's wishlists"
              color="inherit"
              sx={{ marginRight: { xs: 0, md: 1.5 } }}
            >
              <Badge badgeContent={1} color="warning">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            {/* cart */}
            <IconButton
              size="large"
              aria-label="Show number of items in user cart"
              color="inherit"
            >
              <Badge badgeContent={4} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
