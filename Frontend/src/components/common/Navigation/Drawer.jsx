import {
  Drawer,
  Typography,
  Box,
  Link,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ChevronRight } from "@mui/icons-material";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}));

const StyledChevronRight = styled(ChevronRight)(({ theme }) => ({
  marginLeft: "auto",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  width: "100%",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(4),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.typography.color,
  letterSpacing: -0.1,
  "& .MuiTypography-root": {
    // fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function NavDrawer() {
  const theme = useTheme();

  // const toggleDrawer = (open) => {
  //   setState({
  //     ...state,
  //     isDrawerOpen: open,
  //   });
  // };

  return (
    <StyledDrawer
      anchor="left"
      // open={state.isDrawerOpen}
      // onClose={() => {
      //   toggleDrawer(false);
      // }}
      // TODO automatically hide drawer on md screens & above.
    >
      {/* // TODO structure drawer to show the right view when user clicks chevronright element. */}
      <List sx={{ paddingTop: 0, width: "300px" }}>
        <ListItem
          sx={{
            paddingBlock: theme.spacing(2.5),
            backgroundColor: "rgba(233, 233, 240, 0.6)",
            display: "block",
            width: "100%",
          }}
        >
          <Box sx={{ paddingLeft: theme.spacing(2) }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: theme.typography.fontWeightRegular,
                marginBottom: "0.5rem",
              }}
            >
              Hie there!
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: theme.spacing(2) }}>
            <Typography>
              <StyledLink>Login &nbsp;</StyledLink>
              or&nbsp;
              <StyledLink>Signup</StyledLink>
            </Typography>
          </Box>
        </ListItem>
        <StyledListItem sx={{ width: "100%" }}>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Explore</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Clothing</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Stickers</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Phone Cases</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Wall Art</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Home & Living</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Kids & Babies</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Accessories</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Stationery & Office</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
        <StyledListItem>
          <StyledBox>
            <Avatar></Avatar>
            <StyledLink>
              <Typography>Gifts</Typography>
            </StyledLink>
            <StyledChevronRight></StyledChevronRight>
          </StyledBox>
        </StyledListItem>
      </List>
      {/* // TODO use gap to space the link elements here. */}
      <Box
        sx={{
          padding: theme.spacing(3.5),
          paddingTop: theme.spacing(1),
        }}
      >
        <StyledLink>
          <Typography variant="body2">Delivery</Typography>
        </StyledLink>
        <StyledLink>
          <Typography variant="body2">Returns</Typography>
        </StyledLink>
        <StyledLink>
          <Typography variant="body2">Help Center</Typography>
        </StyledLink>
        <StyledLink>
          <Typography variant="body2">Sell Your Art</Typography>
        </StyledLink>
      </Box>
    </StyledDrawer>
  );
}
