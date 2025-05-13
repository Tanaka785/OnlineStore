import { Box, IconButton, InputAdornment, TextField } from "@mui/material";

import OutlinedTextField from "../OutlinedTextField";
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
      <OutlinedTextField />
    </Box>
  );
}
