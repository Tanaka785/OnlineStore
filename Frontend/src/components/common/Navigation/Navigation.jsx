/* TODO 

borders.
make logo text responsive, i mean hide some of it when screen gets small like overflow thing.
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
  ChevronRight,
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  alignItems: 'center',
  
}));

const StyledChevronRight = styled(ChevronRight)(({ theme }) => ({
  marginLeft: 'auto',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  width: "100%",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(4),
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
  // paddingInline: '1rem',
  "&:hover": {
    borderRadius: theme.spacing(3),
  },
}));

export default function NavigationAppBar() {
  const theme = useTheme();
  const [state, setState] = useState({
    isDrawerOpen: false,
    isDefaultDrawer: true,
  });

  const toggleDrawer = (open) => {
    setState({
      ...state,
      isDrawerOpen: open,
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
              <Box
                gap={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: { xs: theme.spacing(-2) },
                }}
              >
                {/* MenuIcon */}
                <StyledIconButton
                  onClick={() => {
                    toggleDrawer(true);
                  }}
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "flex",
                      md: "none",
                    },
                  }}
                >
                  <MenuIcon />
                </StyledIconButton>
                {/* Drawer */}
                <StyledDrawer
                  anchor="left"
                  open={state.isDrawerOpen}
                  onClose={() => {
                    toggleDrawer(false);
                  }}
                  // TODO automatically hide drawer on md screens & above.
                >
                  {/* // TODO structure drawer to show the right view when user clicks chevronright element. */}
                  <List sx={{ paddingTop: 0, width: "300px" }}>
                    <ListItem
                      sx={{
                        paddingBlock: theme.spacing(2.5),
                        backgroundColor: "rgba(233, 233, 240, 0.6)",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ paddingLeft: theme.spacing(2) }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: theme.typography.fontWeightRegular,
                            marginBottom: "0.5rem",
                          }}
                        >
                          Hie there!
                        </Typography>
                      </Box>
                      <Box sx={{ paddingLeft: theme.spacing(2) }}>
                        <Typography>
                          <StyledLink>Login &nbsp;</StyledLink>
                          or&nbsp;
                          <StyledLink>Signup</StyledLink>
                        </Typography>
                      </Box>
                    </ListItem>
                    <StyledListItem sx={{ width: "100%" }}>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Explore</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Clothing</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Stickers</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Phone Cases</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Wall Art</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Home & Living</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Kids & Babies</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Accessories</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Stationery & Office</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledBox>
                        <Avatar></Avatar>
                        <StyledLink>
                          <Typography>Gifts</Typography>
                        </StyledLink>
                        <StyledChevronRight></StyledChevronRight>
                      </StyledBox>
                    </StyledListItem>
                  </List>
                  {/* // TODO use gap to space the link elements here. */}
                  <Box
                    sx={{
                      padding: theme.spacing(3.5),
                      paddingTop: theme.spacing(1),
                    }}
                  >
                    <StyledLink>
                      <Typography variant="body2">Delivery</Typography>
                    </StyledLink>
                    <StyledLink>
                      <Typography variant="body2">Returns</Typography>
                    </StyledLink>
                    <StyledLink>
                      <Typography variant="body2">Help Center</Typography>
                    </StyledLink>
                    <StyledLink>
                      <Typography variant="body2">Sell Your Art</Typography>
                    </StyledLink>
                  </Box>
                </StyledDrawer>
                <Box
                  sx={{
                    display: "flex",
                    marginRight: theme.spacing(1),
                    overflow: true,
                    alignItems: "center",
                    marginLeft: { md: theme.spacing(1) },
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
                  <StyledLink>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "1.6rem",
                      }}
                    >
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
                      },
                    }}
                  >
                    <StyledIconButton>
                      <StyledLink>
                        <Typography variant="body1">
                          Sell your designs
                        </Typography>
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
                  <Box sx={{ display: "flex", marginRight: theme.spacing(0) }}>
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
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
        <SearchField />
      </Box>
    </Box>
  );
}
