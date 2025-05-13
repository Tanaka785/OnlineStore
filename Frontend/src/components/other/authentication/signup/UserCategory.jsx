import { Box } from "@mui/material";
import CenteredBox from "./CenteredBox";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const HalfBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "grid",
  placeItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  height: "150px",
}));

export default function UserCategory() {
  const theme = useTheme();
  return (
    <CenteredBox sx={{ display: "flex", marginTop: 4 }}>
      <HalfBox>HalfBox 1</HalfBox>
      <HalfBox>HalfBox 2</HalfBox>
    </CenteredBox>
  );
}
