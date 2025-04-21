import { Box, Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Banner() {
    const theme = useTheme();
    return (
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          marginInline: { md: theme.spacing(3) },
          marginBlock: { md: theme.spacing(1) },
        }}
      >
        {/* // TODO research the best mui component for images. */}
        <Avatar src="./Banner.png" alt="Banner"/>
      </Box>
    );
}