import { Box, useTheme, Typography, Tooltip, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

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
        <StyledLink>
          <Typography>Explore</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Clothing</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Stickers</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Phone Cases</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Wall Art</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Home & Living</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Kids & Babies</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Accessories</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Stationery & Office</Typography>
        </StyledLink>
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
        <StyledLink>
          <Typography>Gifts</Typography>
        </StyledLink>
      </Tooltip>
    </Box>
  );
}
