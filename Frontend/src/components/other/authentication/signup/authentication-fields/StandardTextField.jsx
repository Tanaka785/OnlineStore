import { TextField } from "@mui/material";

export default function StandardTextField(props) {
  return (
    <TextField
      variant="standard"
      fullWidth
      sx={{ paddingBlock: 2 }}
      {...props}
    />
  );
}
