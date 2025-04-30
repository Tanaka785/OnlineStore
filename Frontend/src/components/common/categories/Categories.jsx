import { Box, Typography, Tooltip, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { categories } from "../categories/categories";

export default function Categories() {
  const theme = useTheme();
  return (
    <Box
      gap={5}
      sx={{
        marginInline: theme.spacing(4),
        marginTop: { xs: 1, md: 1 },
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
          // "&::-webkit-scrollbar": {
          //   display: "none",
          // },
          // scrollbarWidth: "none",
        }}
      >
        {categories.map((category) => (
          <Tooltip
            title={`View all ${category.name}`}
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
