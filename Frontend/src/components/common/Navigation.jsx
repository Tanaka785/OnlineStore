import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  TextField,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Menu, Favorite, ShoppingCart, Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: theme.palette.divider,
  color: theme.palette.text.primary,
  marginTop: theme.spacing(1),
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  border: theme.palette.divider,
}))

const StyledLink = styled(Link)(({ theme }) => ({
  textDecorationLine: "none",
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  boxSizing: "border-box",
  paddingInline: theme.spacing(2),
  "&:hover": {
    borderRadius: theme.spacing(3),
  },
}));

export default function NavigationAppBar() {
  const theme = useTheme();
  const [state, setState] = useState({
    isDrawerOpen: false,
  });

  const toggleDrawer = () => {
    setState({
      ...state,
      isDrawerOpen: state.isDrawerOpen == true ? false : true,
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Box
            gap={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              // border: "1px solid red",
            }}
          >
            <Box gap={0} sx={{ display: "flex", alignItems: "center" }}>
              {/* MenuIcon */}
              <StyledIconButton
                onClick={toggleDrawer}
                sx={{ display: { sm: "flex", md: "none" } }}
              >
                <MenuIcon />
              </StyledIconButton>
              {/* Drawer */}
              <StyledDrawer
                anchor="left"
                open={state.isDrawerOpen}
                onClose={toggleDrawer}
              >
                <List>
                  <ListItem>
                    <ListItemText primary="Hie there!" />
                  </ListItem>
                </List>
              </StyledDrawer>
              {/* Logo */}
              <StyledIconButton>
                <Avatar
                  src="/Logo.png"
                  alt="Logo"
                  sx={{ minWidth: 40, minHeight: 40 }}
                >
                  Logo
                </Avatar>
              </StyledIconButton>
              {/* Logo text */}
              <StyledIconButton>
                <StyledLink sx={{ ml: -1 }}>
                  <Typography variant="h6">WEBVIBES</Typography>
                </StyledLink>
              </StyledIconButton>
            </Box>
            {/* searchfield, nav-links, cart & favorites box. */}
            <Box
              sx={{
                display: "flex",
                flexGrow: { xs: 0, sm: 1, md: 1 },
                // border: "1px solid red",
                marginLeft: "auto",
              }}
            >
              {/* searchfield */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  mr: 2,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <StyledTextField
                  fullWidth
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon sx={{ minWidth: 30, minHeight: 30 }} />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Box>
              {/* nav-links */}
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "right",
                  justifyContent: "end",
                  marginLeft: "auto",
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="h6">Sell your designs</Typography>
                    </StyledLink>
                  </StyledIconButton>
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="h6">Login</Typography>
                    </StyledLink>
                  </StyledIconButton>
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="h6">Signup</Typography>
                    </StyledLink>
                  </StyledIconButton>
                </Box>
                {/* cart & favorites icons. */}
                <Box sx={{ display: "flex" }}>
                  {/* favorite/wishlits icon */}
                  <StyledIconButton size="large">
                    <Favorite />
                  </StyledIconButton>
                  {/* cart icon */}
                  <StyledIconButton size="large">
                    <ShoppingCart />
                  </StyledIconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
