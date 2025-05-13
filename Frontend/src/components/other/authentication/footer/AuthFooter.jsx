import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function AuthFooter() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "grid",
        bottom: 0,
        marginTop: 12,
        width: "100%",
        minHeight: 200,
        placeItems: "center",
      }}
    >
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
        <Typography>One</Typography>
        <Typography>Two</Typography>
      </Box>
    </Box>
  );
}
