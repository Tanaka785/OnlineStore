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
  ListItemAvatar,
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Box>
                    <Typography variant="body2">Hi there!</Typography>
                    <Typography variant="body2">
                      <Link href="/">Login</Link> or&nbsp;
                      <Link href="/">Signup</Link>
                    </Typography>
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
          {drawerItems.map((item) => (
            <ListItem disablePadding key={item.category}>
              <ListItemButton component="a" href="#" sx={{ gap: 1 }}>
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
                <ListItemText primary={item.category} />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavDrawer;
