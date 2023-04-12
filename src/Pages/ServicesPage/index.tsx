import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import ServiceBox from "./containers/ServiceBox";
import ServiceCarousel from "./containers/ServiceCarousel";

const ServiceSection = styled.section`
  padding: 0px 80px 40px 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 0px 20px 40px 20px;
  }
`;

function ServicesPage() {

  return (
    <ServiceSection>
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
  );
}

export default ServicesPage;
