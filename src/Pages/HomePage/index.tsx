import BannerCarousel from "./containers/BannerCarousel";
import CustomOrder from "../../containers/CustomOrder";
import MadeWithLove from "./containers/MadeWithLove";
import OfferOfWeek from "./containers/OfferOfWeek";
import CompleteMenuBox from "./containers/CompleteMenuBox";

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <OfferOfWeek/>
      <MadeWithLove />
      <CompleteMenuBox/>
      <CustomOrder />
    </>
  );
}

export default HomePage;
