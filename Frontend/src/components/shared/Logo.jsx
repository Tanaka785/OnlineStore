import { Avatar, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export default function Logo() {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <IconButton>
        <Avatar src="/webvibes.png" />
      </IconButton>
      <Typography variant="h6" color="primary">
        WebVibes
      </Typography>
    </Box>
  );
}
