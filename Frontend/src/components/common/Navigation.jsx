import * as React from "react";
import { AppBar, Drawer, List, ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import { useState } from "react";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "transparent",
    boxShadow: "none",
    border: theme.palette.divider,
    color: theme.palette.text.primary,
}))

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}))

export default function NavigationAppBar() {

  const [state, setState] = useState({
    isDrawerOpen: false,
  });

  const toggleDrawer = () => {
    setState({
      ...state,
      isDrawerOpen: (state.isDrawerOpen == true)? false : true
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>
          <StyledDrawer open={state.isDrawerOpen} onClose={toggleDrawer}>
            <List>
              <ListItem>
                <ListItemText primary="Hello World!"/>
              </ListItem>
            </List>
          </StyledDrawer>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
