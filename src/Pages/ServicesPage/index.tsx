import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import ServiceBox from "./containers/ServiceBox";
import ServiceCarousel from "./containers/ServiceCarousel";
import CustomOrder from "../../containers/CustomOrder";

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
        <ServiceCarousel />
      </ServiceSection>
      {!homepageSection && <CustomOrder />}
    </>
  );
}

export default ServicesPage;
