import { Box, useTheme, Typography, Tooltip, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
export default function Categories() {
  const theme = useTheme();
  return (
    <Box
      gap={5}
      sx={{
        marginInline: theme.spacing(3),
        display: "flex",
        marginTop: theme.spacing(3),
        justifyContent: "space-between",
      }}
    >
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="For You" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Funny T-Shirts" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vintage Posters" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Music Posters" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fresh Finds" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fan Art" />
            </ListItem>
          </List>
        }
      >
        <Link>
          <Typography>Explore</Typography>
        </Link>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Clothing</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Stickers</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Phone Cases</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Wall Art</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Home & Living</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Kids & Babies</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Accessories</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Stationery & Office</Typography>
      </Tooltip>
      <Tooltip
        arrow
        title={
          <List>
            <ListItem>
              <ListItemText primary="All Clothing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="..." />
            </ListItem>
          </List>
        }
      >
        <Typography>Gifts</Typography>
      </Tooltip>
    </Box>
  );
}
