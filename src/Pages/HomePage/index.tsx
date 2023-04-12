import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import CompleteMenuBox from "./containers/CompleteMenuBox";
import MenuPage from "../MenuPage";
import CustomOrder from "../../containers/CustomOrder";

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <OfferOfWeek/>
      <MadeWithLove />
      <ServicesPage />
      <MenuPage />
      <CompleteMenuBox/>
      <CustomOrder />
    </>
  );
}

export default HomePage;
