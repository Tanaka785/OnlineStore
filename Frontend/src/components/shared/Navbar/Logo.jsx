import { Avatar, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/logo/logo.png";
import { HOME } from "../../../constants/routes";

export default function Logo() {
  return (
    <Box
      component={"a"}
      href={HOME}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        textDecoration: "none",
      }}
    >
      <IconButton sx={{ padding: 0 }}>
        <Avatar src={logo} />
      </IconButton>
      <Typography variant="h6" color="primary" sx={{ marginLeft: 1 }}>
        WebVibes
      </Typography>
    </Box>
  );
}
