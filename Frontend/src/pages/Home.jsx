import NavigationAppBar from "../components/common/Navigation/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from "../components/common/Divider";
import Banner from "../components/common/Banner";
import Categories from "../components/common/categories/Categories.jsx";
function Home() {
    return (
        <Box>
            <CssBaseline />
            <NavigationAppBar />
            <Categories />
            <Divider />
            {/* <Banner/> */}
        </Box>
    )
};

export default Home;

// TODO structure your project properly