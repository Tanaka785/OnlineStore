import { Box, TextField } from "@mui/material";

export default function SearchField() {
  return (
    <Box
      sx={{
        color: "primary.main",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <TextField />
    </Box>
  );
}
