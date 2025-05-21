import { Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";

export default function AuthHeading({ primaryText, secondaryText, ...props }) {
  return (
    <CenteredBox sx={{ marginTop: 8 }}>
      <Typography component={"div"} variant="h5" sx={{ marginBottom: 2 }}>
        {primaryText}
      </Typography>
      <Typography component="div" variant="body1" sx={{ textAlign: "center" }}>
        {secondaryText}
      </Typography>
    </CenteredBox>
  );
}
