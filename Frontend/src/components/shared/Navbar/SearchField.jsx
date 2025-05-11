import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
    </Box>
  );
}
