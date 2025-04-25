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

export default function NavigationAppBar() {
  const theme = useTheme();

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
                  marginLeft: { xs: theme.spacing(-2) },
                }}
              >
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
                    <StyledLink to={`/about/selling`}>
                      <StyledIconButton>
                        <Typography variant="body1">
                          Sell your designs
                        </Typography>
                      </StyledIconButton>
                    </StyledLink>
                    <StyledLink to={`/auth/login`}>
                      <StyledIconButton>
                        <Typography variant="body1">Login</Typography>
                      </StyledIconButton>
                    </StyledLink>
                    <StyledLink to={`/signup`}>
                      <StyledIconButton>
                        <Typography variant="body1">Signup</Typography>
                      </StyledIconButton>
                    </StyledLink>
                  </Box>
                  {/* cart & favorites icons. */}
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
                    {/* favorite/wishlits icon */}
                    <StyledTooltip title="WishLists" arrow>
                      <StyledLink to={`/lists`}>
                        <StyledIconButton
                          size="small"
                          sx={{ padding: { xs: 0, md: theme.spacing(1.5) } }}
                        >
                          <Avatar
                            src="Favorite.svg"
                            sx={{ width: 27, height: 27 }}
                          />
                        </StyledIconButton>
                      </StyledLink>
                    </StyledTooltip>
                    {/* cart icon */}
                    <StyledTooltip title="Cart" arrow>
                      <StyledLink to={`/cart`}>
                        <StyledIconButton
                          size="small"
                          sx={{ padding: theme.spacing(1.5) }}
                        >
                          <Avatar
                            src="Cart.svg"
                            sx={{ width: 27, height: 27 }}
                          />
                        </StyledIconButton>
                      </StyledLink>
                    </StyledTooltip>
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
