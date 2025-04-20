import NavigationAppBar from "../components/common/Navigation/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Categories from "../components/common/Categories";
import Divider from "../components/common/Divider";

function Home() {
    return (
        <Box>
            <CssBaseline />
            <NavigationAppBar />
            <Categories />
            <Divider/>
        </Box>
    )
};

export default Home;