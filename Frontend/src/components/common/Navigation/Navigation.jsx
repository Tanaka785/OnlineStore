/* TODO 

borders.
make logo text responsive, i mean hide some of it when screen gets small like overflow thing.
drawer, 
remove the boxshadow on logo, show a tooltip on logo hover
*/
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
  Tooltip,
  tooltipClasses,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchField from "./SearchField";
import { styled, useTheme } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: theme.palette.divider,
  color: theme.palette.text.primary,
  marginTop: theme.spacing(1),
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(185, 0, 255)",
    color: theme.palette.common.white,
    minWidth: 20,
    minHeight: 20,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(185, 0, 255)",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  // color: "rgba(0, 0, 0, 0.87)",
  letterSpacing: -0.5,
  "& .MuiTypography-root": {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  boxSizing: "border-box",
  // paddingInline: '1rem',
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
    <Box>
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Box
            gap={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box gap={0} sx={{ display: "flex", alignItems: "center", marginLeft: theme.spacing(-1) }}>
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
              <Box
                gap={1}
                sx={{
                  display: "flex",
                  marginRight: theme.spacing(1),
                  overflow: true,
                  alignItems: "center",
                }}
              >
                {/* Logo */}
                <StyledIconButton>
                  <Avatar
                    src="/Logo.png"
                    alt="Logo"
                    sx={{
                      maxWidth: 30,
                      maxHeight: 30,
                      backgroundPosition: "center",
                    }}
                  />
                </StyledIconButton>
                {/* Logo text */}                   
                <StyledLink sx={{ ml: -1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1.6rem",
                      color: theme.palette.text.primary,
                    }}
                  >
                    WEBVIBES
                  </Typography>
                </StyledLink>
              </Box>
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
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              >
                <SearchField/>
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
                <Box
                  gap={2}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                      marginRight: theme.spacing(2),
                    },
                  }}
                >
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="body1">Sell your designs</Typography>
                    </StyledLink>
                  </StyledIconButton>
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="body1">Login</Typography>
                    </StyledLink>
                  </StyledIconButton>
                  <StyledIconButton>
                    <StyledLink>
                      <Typography variant="body1">Signup</Typography>
                    </StyledLink>
                  </StyledIconButton>
                </Box>
                {/* cart & favorites icons. */}
                <Box gap={1} sx={{ display: "flex", marginRight: theme.spacing(1) }}>
                  {/* favorite/wishlits icon */}
                  <StyledTooltip title="WishLists" arrow>
                    <StyledIconButton size="small">
                      <Avatar
                        src="Favorite.svg"
                        sx={{ width: 27, height: 27 }}
                      />
                    </StyledIconButton>
                  </StyledTooltip>
                  {/* cart icon */}
                  <StyledTooltip title="Cart" arrow>
                    <StyledIconButton size="small">
                      <Avatar src="Cart.svg" sx={{ width: 27, height: 27 }} />
                    </StyledIconButton>
                  </StyledTooltip>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
    <Box sx={{ display: {xs: "flex", sm: "flex", md: "none"}}}>
      <SearchField/>
    </Box>
    </Box>
  );
}
