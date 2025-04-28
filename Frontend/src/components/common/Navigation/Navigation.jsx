/* TODO 

- remove scrollX showing up on the homepage.

*/
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Tooltip,
  tooltipClasses,
  IconButton,
} from "@mui/material";
import SearchField from "./SearchField";
import { styled, useTheme } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavDrawer from "./Drawer";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: theme.palette.divider,
  color: theme.palette.text.primary,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    marginInline: theme.spacing(0),
  },
  [theme.breakpoints.up("md")]: {
    marginInline: theme.spacing(2.5),
  },
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.typography.color,
    color: theme.palette.common.white,
    minWidth: 20,
    minHeight: 20,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.typography.color,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.typography.color,
  letterSpacing: -0.1,
  "& .MuiTypography-root": {
    // fontWeight: theme.typography.fontWeightMedium,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  boxSizing: "border-box",
  color: theme.typography.color,
  paddingInline: "0.7rem",
  "&:hover": {
    borderRadius: theme.spacing(3),
  },
}));

const StyledNavLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1.5),
  borderRadius: "50px",
  textDecoration: "none",
  color: theme.palette.text.primary,
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function NavigationAppBar() {
  const theme = useTheme();

  const navLinks = [
    { name: "Sell your designs", path: "/about/selling" },
    { name: "Login", path: "/auth/login" },
    { name: "Signup", path: "/signup" },
  ];

  const navIcons = [
    { title: "WishLists", path: "/lists", iconSrc: "Favorite.svg" },
    { title: "Cart", path: "/cart", iconSrc: "Cart.svg" },
  ];
  
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
              <Box
                gap={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: {
                    xs: theme.spacing(-1),
                    sm: theme.spacing(-2),
                    md: theme.spacing(-2),
                  },
                }}
              >
                {/* Drawer */}
                <NavDrawer />
                {/* remove the boxshadow on logo, show a tooltip on logo hover */}
                <Box
                  sx={{
                    display: "flex",
                    marginRight: theme.spacing(1),
                    marginLeft: {
                      xs: theme.spacing(-1),
                      sm: theme.spacing(-1),
                    },
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
                        maxWidth: { xs: 30, sm: 30, md: 35 },
                        maxHeight: { xs: 30, sm: 30, md: 35 },
                        backgroundPosition: "center",
                      }}
                    />
                  </StyledIconButton>
                  {/* Logo text */}
                  {/*TODO make logo text responsive, i mean hide some of it when screen
                  gets small like overflow thing. */}
                  <StyledLink>
                    <Typography
                      variant="h6"
                      sx={{
                        // fontWeight: theme.typography.fontWeightBold,
                        fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.9rem" },
                        color: "rgb(51, 51, 51)",
                        marginTop: {
                          xs: theme.spacing(0.2),
                          sm: theme.spacing(0.2),
                          md: theme.spacing(0.6),
                        },
                        letterSpacing: -1.3,
                      }}
                    >
                      {/* TODO fix the color for nav links, and for logo text */}
                      WEBVIBES
                    </Typography>
                  </StyledLink>
                </Box>
              </Box>
              {/* searchfield, nav-links, cart & favorites StyledBox. */}
              <Box
                sx={{
                  display: "flex",
                  flexGrow: { xs: 0, sm: 1, md: 1 },
                  // border: "1px solid red",
                  marginLeft: "auto",
                }}
              >
                {/* TODO style the borders */}
                {/* searchfield */}
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    mr: 2,
                    display: { xs: "none", sm: "none", md: "flex" },
                  }}
                >
                  <SearchField />
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
                        alignItems: "center",
                      },
                    }}
                  >
                    {navLinks.map((link) => (
                      <StyledNavLink to={link.path}>
                        <Typography variant="body1">{link.name}</Typography>
                      </StyledNavLink>
                    ))}
                  </Box>
                  {/* Nav Icons. */}
                  <Box
                    sx={{
                      display: "flex",
                      marginRight: {
                        xs: theme.spacing(-2),
                        sm: theme.spacing(-2),
                        md: theme.spacing(3),
                      },
                      alignItems: "center",
                    }}
                  >
                    {navIcons.map((item) => (
                      <StyledTooltip title={item.title} arrow key={item.path}>
                        <StyledLink to={item.path}>
                          <StyledIconButton
                            size="small"
                            sx={{ padding: { xs: 0, md: theme.spacing(1.5) } }}
                          >
                            <Avatar
                              src={item.iconSrc}
                              sx={{ width: 27, height: 27 }}
                            />
                          </StyledIconButton>
                        </StyledLink>
                      </StyledTooltip>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </StyledAppBar>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
        <SearchField />
      </Box>
    </Box>
  );
}
