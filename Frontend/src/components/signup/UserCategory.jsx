import { Box, Typography, alpha, styled } from "@mui/material";
import { useTheme } from "@emotion/react";

const SelectableBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(2),
  gap: 3,
}));

export default function UserCategory() {
  const theme = useTheme();

  const userCategories = [
    {
      icon: "<icon/>",
      type: "Artist",
      description: "Set up shop and start selling your designs",
    },
    {
      icon: "<icon/>",
      type: "Customer",
      description: "Browse the marketplace and find your thing.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: 3,
        width: "36%",
        height: "150px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {userCategories.map((category) => (
        <SelectableBox>
          <Typography variant="body1">{category.icon}</Typography>
          <Typography variant="body1">{`${category.type} Signup`}</Typography>
          <Typography variant="body1" sx={{ color: theme.palette.grey[800] }}>
            {category.description}
          </Typography>
        </SelectableBox>
      ))}
    </Box>
  );
}
