export default function AuthCenteredBox({ children, ...props }) {
  return (
    <Box
      sx={{ display: "grid", placeItems: "center", width: "100%", ...props.sx }}
      {...props}
    >
      {{ children }}
    </Box>
  );
}
