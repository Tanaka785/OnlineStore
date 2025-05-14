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

      {/* Shared Black Box for both sets of links */}
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          paddingY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Big Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
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

        {/* Small Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {smallLinks.map((link, index) => (
            <Box
              key={link.label}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                href={link.url}
                underline="none"
                color="white"
                sx={{ fontSize: "0.75rem" }}
              >
                {link.label}
              </Link>
              {/* Add / after the link except for the last one */}
              {index < smallLinks.length - 1 && (
                <Typography color="white" sx={{ mx: 1 }}>
                  /
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
