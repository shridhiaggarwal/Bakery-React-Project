import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import CompleteMenuBox from "./containers/CompleteMenuBox";
import CustomOrder from "../../containers/CustomOrder";

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <OfferOfWeek/>
      <MadeWithLove />
      {/* <ServicesPage /> */}
      <CompleteMenuBox/>
      <CustomOrder />
    </>
  );
}

export default HomePage;
