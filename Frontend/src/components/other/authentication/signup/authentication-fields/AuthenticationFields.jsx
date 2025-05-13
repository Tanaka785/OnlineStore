import { Box, FormControl } from "@mui/material";
import StandardTextField from "./StandardTextField";
import CenteredBox from "../CenteredBox";

export default function AuthenticationFields() {
  return (
    <CenteredBox sx={{ gap: 4, marginBlock: 4 }}>
      <FormControl sx={{ width: "100%" }}>
        <StandardTextField label="Email" />
        <StandardTextField label="Username" />
        <StandardTextField label="Password" />
      </FormControl>
    </CenteredBox>
  );
}
