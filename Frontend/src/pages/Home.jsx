import NavigationAppBar from "../components/common/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function Home() {
    return (
        <Box sx={{ display: "flex", height: '100vh' }}>
            <CssBaseline />
            <NavigationAppBar />
        </Box>
    )
};

export default Home;