import NavigationAppBar from "../components/common/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SearchField from "../components/common/SearchField";
function Home() {
    return (
        <Box sx={{  height: '100vh' }}>
            <CssBaseline />
            <NavigationAppBar />
            <SearchField/>
        </Box>
    )
};

export default Home;