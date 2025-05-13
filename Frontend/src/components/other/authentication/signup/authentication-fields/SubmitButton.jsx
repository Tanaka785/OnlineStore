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
}));

export default function SubmitButton({ text }) {
  const theme = useTheme();
  return <StyledButton>{text}</StyledButton>;
}
