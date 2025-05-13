import { Box } from "@mui/material";

export default function AuthFooter() {
  return (
    <Box
      sx={{
        display: "grid",
        bottom: 0,
        width: "100%",
        border: "1px solid blue",
        minHeight: 200,
        placeItems: "center",
      }}
    >
      I am the footer.
    </Box>
  );
}
