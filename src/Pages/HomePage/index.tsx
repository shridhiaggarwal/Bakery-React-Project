import TextImageBox from "../../components/TextImageBox";
import BannerCarousel from "./containers/BannerCarousel";
import CustomOrder from "../../containers/CustomOrder";
import MadeWithLove from "./containers/MadeWithLove";
import OfferOfWeek from "./containers/OfferOfWeek";

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <OfferOfWeek/>
      <MadeWithLove />
      <CustomOrder />
    </>
  );
}

export default HomePage;
