import React from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";
import AboutBox from "./containers/AboutBox";
import CounterCardsContainer from "./containers/CountCardsContainer";
import TeamContainer from "./containers/TeamContainer";

const AboutSection = styled.section`
  padding: 80px;
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
        margin="0 0 4rem 0"
        textAlign="center"
      >
        About us
      </Typography>
      <AboutBox />
      <CounterCardsContainer />
      <TeamContainer />
    </AboutSection>
  );
}

export default AboutPage;
