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
  styled,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { useState } from "react";

const CustomLink = styled(Link)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  letterSpacing: 0.5,
}))

function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerItems = [
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Category to explore all the products"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Explore",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Gadgets Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Gadgets",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Phone Accessories Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Phone Accessories",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Laptop Accessories Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Laptop Accessories",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Audio Gear Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Audio Gear",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Wearable Tech Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Wearable Tech",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Smart Home Devices Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Smart Home Devices",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Branded Apparel Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Branded Apparel",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Stickers & Decals Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Stickers & Decals",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Mugs & Drinkware Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Mugs & Drinkware",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Desk Essentials Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Desk Essentials",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Limited Edition Collectibles Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Limited Edition Collectibles",
    },
    {
      avatar: (
        <Avatar
          src="/Logo.png"
          alt="Bundles & Gift Packs Category"
          sx={{ borderRadius: 2, width: 56, height: 56 }}
        />
      ),
      category: "Bundles & Gift Packs",
    },
  ];

  const footerLinks = [
    'Delivery',
    'Returns',
    'Help Center',
    'Sell Your Designs'
  ]

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
        <List sx={{ pt: 0}}>
          <ListItem divider={true} sx={{ pb: 2, backgroundColor: theme.palette.grey[50]}}>
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
          {drawerItems.map((item) => (
            <ListItem disablePadding key={item.category} divider={true}>
              <ListItemButton component="a" href="#" sx={{ gap: 3, py: 2 }}>
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
                <ListItemText primary={item.category} />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* Drawer footer links */}
        <List>
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
