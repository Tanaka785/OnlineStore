import { Box } from "@mui/material";

export default function AuthBox({ children, ...props }) {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100vh",
        height: "100vh",
        ...props.sx, 
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
