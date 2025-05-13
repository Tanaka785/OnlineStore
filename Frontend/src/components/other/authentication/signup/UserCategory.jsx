import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CenteredBox from "./CenteredBox";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const HalfBoxFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  flex: 1,
  display: "grid",
  placeItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  height: "150px",
}));

export default function UserCategory() {
  const theme = useTheme();
  return (
    <CenteredBox sx={{ display: "flex", marginTop: 4 }}>
      <FormControl
        sx={{
          //   border: "1px solid blue",
          width: "100%",
        }}
      >
        <FormLabel sx={{ width: "100%", textAlign: "center" }}>
          Choose Your Category
        </FormLabel>
        <RadioGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 1.5,
            // TODO find out why the formcontrolLabels are overlapping the form
            width: "100%",
          }}
        >
          <HalfBoxFormControlLabel
            value="option1"
            control={<Radio />}
            label="Artist Signup"
          />
          <HalfBoxFormControlLabel
            component="div"
            value="option2"
            control={<Radio />}
            label="Customer Signup"
          />
        </RadioGroup>
      </FormControl>
    </CenteredBox>
  );
}
