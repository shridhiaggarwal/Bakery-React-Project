import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import QuoteBox from "./containers/QuoteBox";
import MenuHomePage from "./containers/MenuHomePage";
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
      <MenuHomePage />
      <CompleteMenuBox/>
      <CustomOrder />
    </>
  );
}

export default HomePage;
