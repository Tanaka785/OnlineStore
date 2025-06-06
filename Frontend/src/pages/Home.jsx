import { Box } from "@mui/material";
import Navbar from "../components/shared/Navbar/Navbar";
import { Login } from "@mui/icons-material";
import CategoryList from "../components/other/homepage/CategoryList";
import Divider from "../components/other/homepage/Divider";
import Banner from "../components/other/homepage/Banner";
import CategoryGallery from "../components/other/homepage/CategoryGallery";
import PageContainer from "../components/other/pages/PageContainer";

export default function Homepage() {
  return (
    <PageContainer>
      <Navbar />
      <CategoryList />
      <Divider />
      <Banner />
      
      <CategoryGallery />
    </PageContainer>
  );
}
