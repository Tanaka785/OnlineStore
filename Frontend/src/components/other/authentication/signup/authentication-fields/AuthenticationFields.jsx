import { Box, Checkbox, FormControl, FormControlLabel } from "@mui/material";
import StandardTextField from "./StandardTextField";
import CenteredBox from "../CenteredBox";

export default function AuthenticationFields() {
  return (
    <CenteredBox sx={{ marginBlock: 4 }}>
      <FormControl sx={{ width: "100%", gap: 3 }}>
        <StandardTextField label="Email" />
        <StandardTextField label="Username" />
        <StandardTextField label="Password" />
        <FormControlLabel
          control={<Checkbox />}
          label="Email me special offers and artist news."
        />
      </FormControl>
    </CenteredBox>
  );
}
