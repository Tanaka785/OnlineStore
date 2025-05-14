import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Public } from "@mui/icons-material";
import CenteredBox from "../signup/CenteredBox";

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

const smallLinks = [
  { label: "Redbubble. All Rights Reserved", url: "/" },
  { label: "User Agreement", url: "/" },
  { label: "Privacy Policy", url: "/" },
  { label: "Copyright", url: "/" },
  { label: "Affiliates", url: "/" },
  { label: "Guidelines", url: "/" },
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

      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: 200,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            // border: "1px solid red",
            marginTop: 3,
          }}
        >
          {bigLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              underline="none"
              color="white"
              sx={{ fontSize: theme.typography.body2.fontSize }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
