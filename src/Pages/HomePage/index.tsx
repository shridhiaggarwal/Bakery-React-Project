import React from "react";
import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import QuoteBox from "./containers/QuoteBox";
import CompleteMenuBox from "./containers/CompleteMenuBox";
import CustomOrder from "../../containers/CustomOrder";
import MenuPage from "../MenuPage";

function HomePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerCarousel />
      <OfferOfWeek />
      <MadeWithLove />
      <ServicesPage homepageSection={true} />
      <QuoteBox />
      <MenuPage homepageSection={true} />
      <CompleteMenuBox />
      <CustomOrder />
    </>
  );
}

export default HomePage;
