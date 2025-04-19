import NavigationAppBar from "../components/common/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Categories from "../components/common/Categories";
function Home() {
    return (
        <Box>
            <CssBaseline />
            <NavigationAppBar />
            <Categories/>
        </Box>
    )
};

export default Home;