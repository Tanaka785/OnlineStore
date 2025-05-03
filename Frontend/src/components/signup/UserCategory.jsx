import { Box, alpha, styled } from "@mui/material";
import { useTheme } from "@emotion/react";

const SelectableBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
}));

export default function UserCategory() {
  return (
    <Box sx={{ display: "flex", marginTop: 3 }}>
      <SelectableBox>Hello</SelectableBox>
      <SelectableBox>Hello</SelectableBox>
    </Box>
  );
}
