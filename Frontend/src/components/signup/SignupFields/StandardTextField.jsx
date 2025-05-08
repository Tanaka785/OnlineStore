import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function StandardTextField(props) {
  const theme = useTheme();
  console.log(theme);
  return (
    <TextField
      variant="standard"
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: "#d3d3d3",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: theme.palette.secondary.main,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: theme.palette.success.main,
        },
        paddingBlock: 2,
      }}
      {...props}
    />
  );
}
