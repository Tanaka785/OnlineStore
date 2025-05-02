import NavigationAppBar from "../components/common/Navigation/Navigation";
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Categories from "../components/shared/categories/Categories.jsx";
import Divider from "../components/shared/Divider.jsx";
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