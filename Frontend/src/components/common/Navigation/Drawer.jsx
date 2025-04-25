import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
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
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default NavDrawer;
