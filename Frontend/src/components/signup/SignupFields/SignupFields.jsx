import { Box } from "@mui/material";
import StandardTextField from "./StandardTextField";

export default function SignupFields() {
  return (
    <Box display={"grid"} gap={8} sx={{ width: "70%", marginBlock: { md: 4 } }}>
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Password" />
    </Box>
  );
}
