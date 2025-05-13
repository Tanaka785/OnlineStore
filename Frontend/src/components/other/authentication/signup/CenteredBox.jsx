import { Box } from "@mui/material";

export default function CenteredBox({ children, sx }) {
  return (
    <Box
      sx={[
        {
          display: "grid",
          placeItems: "center",
          width: "35%",
          // border: "1px solid blue",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
