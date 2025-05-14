import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Public } from "@mui/icons-material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function AuthFooter() {
  const theme = useTheme();
  return (
    <Box
      //  containing box for the whole footer
      sx={{
        display: "grid",
        bottom: 0,
        marginTop: 4,
        width: "100%",
        minHeight: 200,
        placeItems: "center",
      }}
    >
      {/* grey background box */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: theme.palette.grey[100],
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        {/* box for the typography elements inside the grey background box */}
        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            marginRight: 20,
            gap: 2,
          }}
        >
          <StyledTypography variant="body2">
            Mature Content:{" "}
            <Link href="/">
              <b>Hidden</b>
            </Link>
          </StyledTypography>
          <Link href="/">
            <StyledTypography
              component={"div"}
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Public />
              Zimbabwe - USD$ - English
            </StyledTypography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
