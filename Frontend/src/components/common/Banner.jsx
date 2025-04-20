import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Banner() {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: "100%",
          border: "1px solid red",
          margin: { md: theme.spacing(2) },
        }}
      >
        Hello
      </Box>
    );
}