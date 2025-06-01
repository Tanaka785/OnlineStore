import { Box, Button, useTheme } from "@mui/material";
import bannerImage from "../../../assets/banner/banner.png";

function Banner() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <img
        src={bannerImage}
        alt="Promotional Banner"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          textTransform: "none",
          fontSize: theme.typography.h6.fontSize,
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "60px",
          width: "180px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 40,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        Shop Sale
      </Button>
    </Box>
  );
}

export default Banner;
