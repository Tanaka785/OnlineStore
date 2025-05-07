import { Box, Typography } from "@mui/material";
import StandardTextField from "./StandardTextField";
import { useTheme } from "@emotion/react";

export default function SignupFields() {
  const theme = useTheme();

  return (
    <Box display={"grid"} gap={8} sx={{ width: "70%", marginBlock: { md: 4 } }}>
      <StandardTextField label="Email" />
      <StandardTextField label="Email" />
      <StandardTextField label="Password" />
    </Box>
  );
}
