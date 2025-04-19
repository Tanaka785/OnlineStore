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
        <Link>
          <Typography>Clothing</Typography>
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
        <Link>
          <Typography>Stickers</Typography>
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
        <Link>
          <Typography>Phone Cases</Typography>
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
        <Link>
          <Typography>Wall Art</Typography>
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
        <Link>
          <Typography>Home & Living</Typography>
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
        <Link>
          <Typography>Kids & Babies</Typography>
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
        <Link>
          <Typography>Accessories</Typography>
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
        <Link>
          <Typography>Stationery & Office</Typography>
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
        <Link>
          <Typography>Gifts</Typography>
        </Link>
      </Tooltip>
    </Box>
  );
}
