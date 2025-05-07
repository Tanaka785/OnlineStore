import { Box } from "@mui/material";
import StandardTextField from "./StandardTextField";

export default function SignupFields() {
  return (
    <Box display={"grid"} sx={{ width: "70%", marginTop: { md: 4 } }}>
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Password" />
    </Box>
  );
}
