import { Box } from "@mui/material";
import SignupNavbar from "../components/signup/Navbar";
import Header from "../components/signup/Header";

export default function Signup() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <SignupNavbar />
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          marginTop: 10,
        }}
      >
        Hello
      </Box>
    </Box>
  );
}
