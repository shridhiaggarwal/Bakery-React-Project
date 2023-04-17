import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import ServiceBox from "./containers/ServiceBox";
import ServiceCarousel from "./containers/ServiceCarousel";
import CustomOrder from "../../containers/CustomOrder";
import Images from "../../components/Images"
import { useNavigate } from "react-router";

interface IServicePageProps {
  homepageSection?: boolean;
}

const ServiceSection = styled.section<{
  homepageSection?: boolean;
}>`
  padding: ${(props) =>
    props.homepageSection ? "0px 80px 40px 80px" : "80px 80px 0px"};
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: ${(props) =>
      props.homepageSection ? "0px 20px 40px 20px" : "40px 20px"};
  }
`;

function ServicesPage(props: IServicePageProps) {
  const { homepageSection } = props;
  const navigate = useNavigate();

  const handleServiceButton = () => {
    navigate("/services");
  };

  const servicesData = [
    {
      title: "Birthday Cakes",
      subtitle:
        "Make your loved one's birthday extra special with our delicious and beautifully decorated cakes!",
      imageSrc: Images.SERVICE1,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
    {
      title: "Special Cakes",
      subtitle:
        "Make your special occasion even more memorable with our custom cakes!",
      imageSrc: Images.SERVICE2,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
    {
      title: "Corporate Events",
      subtitle:
        "Impress your clients and colleagues with our delectable baked goods at your next corporate event.",
      imageSrc: Images.SERVICE3,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
    {
      title: "Cupcake & Sweets",
      subtitle:
        "Indulge your sweet tooth with our tempting cupcakes and sweets!",
      imageSrc: Images.SERVICE4,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
    {
      title: "Custom Orders",
      subtitle:
        "Looking for something special? Our talented bakers can create custom orders. Let us create something unique just for you.",
      imageSrc: Images.SERVICE5,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
    {
      title: "Quick Delivery",
      subtitle:
        "Need your baked goods in a hurry? No problem! We offer quick and reliable delivery services.",
      imageSrc: Images.SERVICE6,
      buttonText: "More",
      buttonOnclick: handleServiceButton
    },
  ];

  return (
    <>
      <ServiceSection homepageSection={homepageSection}>
        <Typography
          variant="h4"
          color="#da5162"
          margin="0 0 4rem 0"
          textAlign="center"
        >
          Our Services
        </Typography>
        <ServiceBox />
        <ServiceCarousel servicesData={servicesData}/>
      </ServiceSection>
      {!homepageSection && <CustomOrder />}
    </>
  );
}

export default ServicesPage;
