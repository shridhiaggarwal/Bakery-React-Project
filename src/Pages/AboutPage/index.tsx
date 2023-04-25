import React from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";
import AboutBox from "./containers/AboutBox";
import CounterCardsContainer from "./containers/CountCardsContainer";
import TeamContainer from "./containers/TeamContainer";
import TestimonialContainer from "./containers/TestimonialContainer";

const AboutSection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

function AboutPage() {
  return (
    <AboutSection>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 64px 0"
        textAlign="center"
      >
        About us
      </Typography>
      <AboutBox margin="0 0 80px 0" />
      <CounterCardsContainer margin="0 0 80px 0" />
      <TeamContainer margin="0 0 80px 0" />
      <TestimonialContainer />
    </AboutSection>
  );
}

export default AboutPage;
