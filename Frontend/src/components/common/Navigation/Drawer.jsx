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
  ListItemAvatar,
  styled,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { categories } from "../categories/categories";

const CustomLink = styled(Link)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  letterSpacing: 0.5,
}));

function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const footerLinks = [
    "Delivery",
    "Returns",
    "Help Center",
    "Sell Your Designs",
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
        {/* Drawer header */}
        <List sx={{ pt: 0 }}>
          <ListItem
            divider={true}
            sx={{ pb: 2, pt: 2, backgroundColor: theme.palette.grey[50] }}
          >
            <ListItemText
              primary={
                <Box display="flex" flexDirection={"column"} gap={0.5}>
                  <Typography variant="body1">Hi there!</Typography>
                  <Typography variant="body1">
                    <CustomLink href="/">Log In</CustomLink> or&nbsp;
                    <CustomLink href="/">Sign Up</CustomLink>
                  </Typography>
                </Box>
              }
            />
          </ListItem>
          {/* Categories */}
          {categories.map((item) => (
            <ListItem disablePadding key={item.name} divider={true}>
              <ListItemButton component="a" href="#" sx={{ gap: 3, py: 2 }}>
                <ListItemAvatar>
                  <Avatar
                    src={item.avatar}
                    alt={`${item.name} category`}
                    sx={{ borderRadius: 2, width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* Drawer footer links */}
        <List sx={{ pb: 8 }}>
          {footerLinks.map((link) => (
            <ListItem key={link}>
              <ListItemText
                primary={<Typography variant="body2">{link}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavDrawer;
