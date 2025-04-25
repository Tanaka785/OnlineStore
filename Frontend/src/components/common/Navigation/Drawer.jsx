import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  ListItemButton,
} from "@mui/material";

import { Menu as MenuIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { useState } from "react";

function NavDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <List>
            <ListItem button>
              <ListItemText
                primary={
                  <Box>
                    <Typography variant="body2">Hi there!</Typography>
                    <Typography variant="body2">
                      <Link href="#">Login</Link> or&nbsp;
                      <Link href="#">Signup</Link>
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemButton>
              <Box component="img" src="/Logo.png" alt="Logo" />
              <Typography>Explore</Typography>
              <ChevronRightIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default NavDrawer;
