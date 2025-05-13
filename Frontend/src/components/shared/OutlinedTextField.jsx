import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function OutlinedTextField(props) {
  return (
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
            // borderColor: "primary.main",
          },
        },
      }}
      {...props}
    />
  );
}
