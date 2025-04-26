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
  Avatar,
  ListItemIcon,
} from "@mui/material";

import { Menu as MenuIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { useState } from "react";

function NavDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerItems = [
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Explore"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Explore",
    },
  ];

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
          <ListItem>
            <ListItemText
              primary={
                <Box>
                  <Typography variant="body2">Hi there!</Typography>
                  <Typography variant="body2">
                    <Link to={`/`}>Login</Link> or&nbsp;
                    <Link to={`/`}>Signup</Link>
                  </Typography>
                </Box>
              }
            />
          </ListItem>
          {drawerItems.map((item) => (
            <ListItem key={item.category} divider="true" component="a" href="#">
              <ListItemButton>
                <ListItemIcon>{item.avatar}</ListItemIcon>
                <ListItemText primary={item.category} />
                <ChevronRightIcon/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavDrawer;
