import { Box, Typography } from "@mui/material";
import StandardTextField from "./StandardTextField";
import { useTheme } from "@emotion/react";

const labels = {
  Artist: "Shop name",
  Customer: "Username",
};

export default function SignupFields({ selected, setSelected }) {
  const theme = useTheme();

  return (
    <Box display={"grid"} gap={2} sx={{ width: "70%", marginBlock: { md: 4 } }}>
      <StandardTextField label="Email" />
      <StandardTextField label={labels[selected]} />
      <StandardTextField label="Password" />
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography>Hey</Typography>
        <Typography>Hey</Typography>
      </Box>
    </Box>
  );
}
