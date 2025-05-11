import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export default function Logo() {
  return (
    <IconButton>
      <Avatar
        src="/webvibes.png"
        style={{
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </IconButton>
  );
}
