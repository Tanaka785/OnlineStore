import { Box } from "@mui/material";
import StandardTextField from "./StandardTextField";

export default function SignupFields() {
  return (
    <Box display={"grid"}>
      <StandardTextField />
      <StandardTextField />
      <StandardTextField />
    </Box>
  );
}
