import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export default function Logo() {
  return (
    <IconButton>
      <Avatar
        style={{
          backgroundImage: "url('/webvibes.png')",
          backgroundSize: "200%",
          backgroundPosition: "center",
        }}
      />
    </IconButton>
  );
}
