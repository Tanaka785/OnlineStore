import { Box, Button, useTheme, CardMedia } from "@mui/material";
import bannerImage from "../../../assets/banner/banner.png";
import { useNavigate } from "react-router-dom";

function Banner() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        px: 3,
      }}
    >
      <CardMedia
        component="img"
        image={bannerImage}
        alt="Promotional Banner"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: 1.5,
        }}
      />
      <Button
        variant="contained"
        onClick={() => navigate("/sale")}
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
