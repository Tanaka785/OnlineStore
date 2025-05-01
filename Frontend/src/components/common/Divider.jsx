import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Divider() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "3.6rem",
        backgroundColor: "rgba(233, 233, 240, 0.6)",
        marginTop: theme.spacing(0.2),
      }}
    />
  );
}