import { Avatar, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      <IconButton sx={{ padding: 0 }}>
        <Avatar src="/webvibes.png" />
      </IconButton>
      <Typography variant="h6" color="primary" sx={{ marginLeft: 1 }}>
        WebVibes
      </Typography>
    </Box>
  );
}
