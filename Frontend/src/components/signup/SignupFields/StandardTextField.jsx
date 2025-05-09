import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { componentGreyColor } from "../../../pages/Signup";

const textFieldBorderBottomColor = (theme) => theme.palette.text.primary;
const textFieldBorderBottomWidth = 0.02;

export default function StandardTextField(props) {
  const theme = useTheme();
  console.log(theme);
  return (
    <TextField
      variant="standard"
      sx={{
        "& .MuiInputLabel-root": {
          color: "#999999",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: textFieldBorderBottomColor(theme),
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: componentGreyColor,
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: textFieldBorderBottomColor(theme),
          borderBottomWidth: textFieldBorderBottomWidth,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: textFieldBorderBottomColor(theme),
          borderBottomWidth: textFieldBorderBottomWidth,
        },
        paddingBlock: 2,
      }}
      {...props}
    />
    // TODO change the color of the label text. Default color & when focused.
  );
}
