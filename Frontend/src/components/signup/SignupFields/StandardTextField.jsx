import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function StandardTextField(props) {
  const theme = useTheme();

  return (
    <TextField
      variant="standard"
      sx={{ color: theme.palette.grey[5], paddingBlock: 2 }}
      {...props}
    />
  );
}
