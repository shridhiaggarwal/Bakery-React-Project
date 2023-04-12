import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import QuoteBox from "./containers/QuoteBox";
import MenuPage from "../MenuPage";
import CompleteMenuBox from "./containers/CompleteMenuBox";
import CustomOrder from "../../containers/CustomOrder";

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <OfferOfWeek/>
      <MadeWithLove />
      <ServicesPage />
      <QuoteBox />
      <MenuPage />
      <CompleteMenuBox/>
      <CustomOrder />
    </>
  );
}

export default HomePage;
