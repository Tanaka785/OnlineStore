import { Box } from "@mui/material";
import bannerImage from "../../../assets/banner/banner.png";

function Banner() {
  return (
    <Box
      sx={{
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
    </Box>
  );
}

export default Banner;
