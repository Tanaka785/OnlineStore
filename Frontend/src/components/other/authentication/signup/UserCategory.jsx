import { Box } from "@mui/material";
import CenteredBox from "./CenteredBox";
import styled from "@emotion/styled";

const HalfBox = styled(Box)({
  flex: 1,
});

export default function UserCategory() {
  return (
    <CenteredBox sx={{ display: "flex" }}>
      <HalfBox>HalfBox 1</HalfBox>
      <HalfBox>HalfBox 2</HalfBox>
    </CenteredBox>
  );
}
