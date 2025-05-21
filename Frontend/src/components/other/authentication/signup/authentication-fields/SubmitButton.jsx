import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  borderRadius: 50,
  height: "50px",
  "&: hover": {
    backgroundColor: "pink",
  },
  "&:disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
}));

export default function SubmitButton({ text, disabled, sx }) {
  const theme = useTheme();
  return (
    <StyledButton type="submit" disabled={disabled} sx={sx}>
      {text}
    </StyledButton>
  );
}
