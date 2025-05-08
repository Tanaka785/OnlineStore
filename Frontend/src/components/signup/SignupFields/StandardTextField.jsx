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
          borderBottomColor: theme.palette.text.primary,
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
