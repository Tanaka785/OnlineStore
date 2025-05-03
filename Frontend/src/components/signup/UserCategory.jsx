import { Box, SvgIcon, Typography, alpha, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArtistIcon from "../../icons/Artist.svg?react";
import MarketplaceIcon from "../../icons/Marketplace.svg?react";
import { CheckCircle } from "@mui/icons-material";

const SelectableBox = styled(Box)(({ theme }) => ({
  position: "relative",
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingInline: theme.spacing(2),
  paddingTop: theme.spacing(2),
  gap: 5,
  borderRadius: 2,
  cursor: "pointer",
  "&:hover": {
    border: `2px solid ${theme.palette.text.primary}`,
  },
}));

export default function UserCategory() {
  const theme = useTheme();
  const [selected, setSelected] = useState("Customer");

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
        <SelectableBox key={category.type}>
          <CheckCircle
            // color={theme.palette.common.white}
            sx={{
              position: "absolute",
              top: -10,
              left: 4,
              fontSize: 20,
              backgroundColor: (theme) => theme.palette.common.white,
              borderRadius: "50%",
              width: 25,
              height: 25,
            }}
          />
          <SvgIcon
            component={category.icon}
            inheritViewBox
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="body1">{`${category.type} Signup`}</Typography>
          <Typography variant="body2" sx={{ color: theme.palette.grey[800] }}>
            {category.description}
          </Typography>
        </SelectableBox>
      ))}
    </Box>
  );
}
