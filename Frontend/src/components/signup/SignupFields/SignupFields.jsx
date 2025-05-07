import { Box } from "@mui/material";
import StandardTextField from "./StandardTextField";

export default function SignupFields() {
  return (
    <Box display={"grid"} sx={{ border: "1px solid red", width: "100%" }}>
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Email" />
      <StandardTextField placeholder="Password" />
    </Box>
  );
}
