import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Divider() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "3.6rem",
        backgroundColor: "lightgray",
        marginTop: theme.spacing(1.5),
      }}
    />
  );
}