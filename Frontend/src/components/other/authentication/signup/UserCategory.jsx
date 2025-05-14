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
  // borderRadius: 5,
}));

export default function UserCategory({
  selectedCategory,
  setSelectedCategory,
}) {
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
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            console.log("Selected category:", e.target.value);
          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 1.5,
            width: "100%",
          }}
        >
          <HalfBoxFormControlLabel
            value="Artist"
            control={<Radio />}
            label="Artist Signup"
          />
          <HalfBoxFormControlLabel
            component="div"
            value="Customer"
            control={<Radio />}
            label="Customer Signup"
          />
        </RadioGroup>
      </FormControl>
    </CenteredBox>
  );
}
