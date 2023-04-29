import React from "react";
import BannerCarousel from "./containers/BannerCarousel";
import OfferOfWeek from "./containers/OfferOfWeek";
import MadeWithLove from "./containers/MadeWithLove";
import ServicesPage from "../ServicesPage";
import QuoteBox from "./containers/QuoteBox";
import MenuHomePage from "./containers/MenuHomePage";
import CompleteMenuBox from "./containers/CompleteMenuBox";
import CustomOrder from "../../containers/CustomOrder";

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
      <MenuHomePage />
      <CompleteMenuBox />
      <CustomOrder />
    </>
  );
}

export default HomePage;
