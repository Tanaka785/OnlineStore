import { Box, Typography } from "@mui/material";

export default function Promo(params) {
  return (
    <Box sx={{ display: "flex", marginTop: 10, border: "1px solid red" }}>
      <Typography component={"div"} variant="h5">
        Join WebVibes
      </Typography>
    </Box>
  );
}
