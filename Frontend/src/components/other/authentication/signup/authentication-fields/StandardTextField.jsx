import { TextField } from "@mui/material";
import { forwardRef } from "react";

const StandardTextField = forwardRef((props, ref) => {
  return (
    <TextField
      variant="standard"
      fullWidth
      sx={{ paddingBlock: 2 }}
      {...props}
      inputRef={ref}
    />
  );
});

export default StandardTextField;
