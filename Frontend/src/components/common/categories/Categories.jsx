import {
  Box,
  Typography,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { categories } from "../categories/categories";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  // ...
}));

export default function Categories() {
  const theme = useTheme();
  return (
    <Box
      gap={5}
      sx={{
        marginInline: theme.spacing(4),
        marginTop: { xs: 1, md: 2, lg: 4 },
        justifyContent: "space-between",
        display: { xs: "none", sm: "none", md: "flex" },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 2,
          overflowX: "auto",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* TODO the tooltip should show closer to the icon. */}
        {categories.map((category) => (
          <Tooltip
            title={
              <List>
                {category.name == "Explore" ? (
                  ""
                ) : (
                  <StyledListItemButton>
                    <ListItemText primary={`All ${category.name}`} />
                  </StyledListItemButton>
                )}
                {category.tooltipCategories.map((category) => (
                  <StyledListItemButton key={category}>
                    <ListItemText primary={category} />
                  </StyledListItemButton>
                ))}
              </List>
            }
            arrow
            key={category.name}
          >
            <Box sx={{ flexShrink: 0 }}>
              <ListItem disablePadding component={"a"} href="#">
                <ListItemText
                  primary={category.name}
                  sx={{
                    color: theme.palette.text.primary,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                />
              </ListItem>
            </Box>
          </Tooltip>
        ))}
      </List>
    </Box>
  );
}
