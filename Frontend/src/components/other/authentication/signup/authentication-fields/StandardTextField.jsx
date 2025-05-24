import { TextField, InputAdornment, IconButton } from "@mui/material";
import { forwardRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StandardTextField = forwardRef((props, ref) => {
  const { type, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      variant="standard"
      fullWidth
      sx={{ paddingBlock: 2 }}
      {...rest}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      inputRef={ref}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    tabIndex={-1}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : rest.InputProps
      }
    />
  );
});

export default StandardTextField;
