import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Public } from "@mui/icons-material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const bigLinks = [
  { label: "About Us", url: "/" },
  { label: "Social Responsibility", url: "/" },
  { label: "Blog", url: "/" },
  { label: "Delivery", url: "/" },
  { label: "Investor Store", url: "/" },
  { label: "Jobs", url: "/" },
  { label: "Contact Us", url: "/" },
  { label: "Help", url: "/" },
];

export default function AuthFooter() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: 4,
      }}
    >
      {/* Grey Box */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 50,
          backgroundColor: theme.palette.grey[100],
          justifyContent: "flex-end",
          alignItems: "center",
          paddingX: 8,
        }}
      >
        <StyledTypography variant="body2" sx={{ m: 0 }}>
          Mature Content:{" "}
          <Link href="/">
            <b>Hidden</b>
          </Link>
        </StyledTypography>

        <Link href="/" underline="none">
          <StyledTypography
            component="div"
            variant="body2"
            sx={{
              m: 0,
              ml: 2,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Public />
            Zimbabwe - USD$ - English
          </StyledTypography>
        </Link>
      </Box>

      <Box sx={{ backgroundColor: "black", width: "100%", height: 200 }}>
        Hie
      </Box>
    </Box>
  );
}
