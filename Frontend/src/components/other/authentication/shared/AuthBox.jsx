import { Box } from "@mui/material";

export default function AuthBox({ children, ...props }) {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
