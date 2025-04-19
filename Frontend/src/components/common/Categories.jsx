import { Box, useTheme, Typography, Tooltip, List, ListItem, ListItemText } from "@mui/material";
export default function Categories() {
  const theme = useTheme();
  return (
    <Box
      gap={5}
      sx={{
        marginInline: theme.spacing(3),
        display: "flex",
        marginTop: theme.spacing(3),
        justifyContent: 'space-between',
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
        <Typography>Explore</Typography>
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
        <Typography>Clothing</Typography>
      </Tooltip>
    </Box>
  );
}
