import { Box, Typography, alpha, styled } from "@mui/material";
import { useTheme } from "@emotion/react";

const SelectableBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(2),
  gap: 3,
}));

export default function UserCategory() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: 3,
        width: "36%",
        height: "150px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SelectableBox>
        <Typography>Icon</Typography>
        <Typography>Artist Signup</Typography>
        <Typography>Set up shop and start selling your designs</Typography>
      </SelectableBox>
      <SelectableBox>Customer Signup</SelectableBox>
    </Box>
  );
}
