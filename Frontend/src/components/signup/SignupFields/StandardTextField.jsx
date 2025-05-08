import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { componentGreyColor } from "../../../pages/Signup";

export default function StandardTextField(props) {
  const theme = useTheme();
  console.log(theme);
  return (
    <TextField
      variant="standard"
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: componentGreyColor,
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomWidth: 2,
          borderBottomColor: componentGreyColor,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: theme.palette.text.primary,
        },
        paddingBlock: 2,
      }}
      {...props}
    />
  );
}
