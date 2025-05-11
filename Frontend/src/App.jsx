import Homepage from "./pages/Home";
import { CssBaseline, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Homepage />
    </Box>
  );
}

export default App;
