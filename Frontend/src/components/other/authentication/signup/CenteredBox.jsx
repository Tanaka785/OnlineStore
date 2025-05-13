import { Box } from "@mui/material";

export default function CenteredBox({ children }) {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: "35%",
        border: "1px solid blue",
      }}
    >
      {children}
    </Box>
  );
}
