import { Box } from "@mui/material";
import StandardTextField from "./StandardTextField";
import CenteredBox from "../CenteredBox";

export default function AuthenticationFields() {
  return (
    <CenteredBox sx={{ border: "1px solid red" }}>
      <StandardTextField label="Username" />
      <StandardTextField />
      <StandardTextField />
    </CenteredBox>
  );
}
