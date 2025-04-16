import * as React from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: theme.palette.divider,
  color: theme.palette.text.primary,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}));

export default function NavigationAppBar() {
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
              border: "1px solid red",
            }}
          >
            <Box gap={0} sx={{ display: "flex", alignItems: "center" }}>
              {/* MenuIcon */}
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { sm: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
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
              <IconButton>
                <Avatar>Logo</Avatar>
              </IconButton>
              {/* Logo text */}
              <IconButton>
                <Link>
                  <Typography variant="h5">WEBVIBES</Typography>
                </Link>
              </IconButton>
            </Box>
            {/* searchfield, nav-links, cart & favorites box. */}
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              {/* searchfield */}
              <Box sx={{ display: "flex" }}>
                <TextField />
              </Box>
              {/* nav-links */}
              <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
                <IconButton>
                  <Link>
                    <Typography variant="h5">Sell your designs</Typography>
                  </Link>
                </IconButton>
                <IconButton>
                  <Link>
                    <Typography variant="h5">Login</Typography>
                  </Link>
                </IconButton>
                <IconButton>
                  <Link>
                    <Typography variant="h5">Signup</Typography>
                  </Link>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
