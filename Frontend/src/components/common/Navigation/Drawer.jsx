import { Drawer } from "@mui/material";
import { useTheme } from "@emotion/react";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // padding: '14px',
}));

export default function Drawer() {
  const theme = useTheme();
  return <StyledDrawer></StyledDrawer>;
}
