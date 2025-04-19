import { Box, useTheme, Typography, Tooltip, List, ListItem, ListItemText } from "@mui/material";
export default function Categories() {
  const theme = useTheme();
  return (
    <Box sx={{ marginInline: theme.spacing(3), display: "flex" }}>
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
              <ListItemText  primary="Fan Art"/>
            </ListItem>
          </List>
        }
      >
        <Typography>Explore</Typography>
      </Tooltip>
    </Box>
  );
}
