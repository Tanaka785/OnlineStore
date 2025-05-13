import { Box } from "@mui/material";

export default function CenteredBox() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: "35%",
      }}
    />
  );
}
