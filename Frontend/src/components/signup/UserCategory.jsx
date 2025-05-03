import { Box, SvgIcon, Typography, alpha, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArtistIcon from "../../icons/Artist.svg?react";
import MarketplaceIcon from "../../icons/Marketplace.svg?react";

const SelectableBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(2),
  gap: 5,
}));

export default function UserCategory() {
  const theme = useTheme();

  const userCategories = [
    {
      icon: ArtistIcon,
      type: "Artist",
      description: "Set up shop and start selling your designs",
    },
    {
      icon: MarketplaceIcon,
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
          <SvgIcon component={category.icon} inheritViewBox />
          <Typography variant="body1">{`${category.type} Signup`}</Typography>
          <Typography variant="body1" sx={{ color: theme.palette.grey[800] }}>
            {category.description}
          </Typography>
        </SelectableBox>
      ))}
    </Box>
  );
}
