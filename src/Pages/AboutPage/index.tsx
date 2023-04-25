import React from "react";
import Typography from "../../components/Typography";
import styled from "styled-components";
import AboutBox from "./containers/AboutBox";
import CounterCardsContainer from "./containers/CountCardsContainer";
import TeamContainer from "./containers/TeamContainer";
import TestimonialContainer from "./containers/TestimonialContainer";
import Images from "../../components/Images";

const AboutSection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

function AboutPage() {
  
  const aboutPageData = [
    {
      title: "Our Mission",
      subtitle:
        "We are dedicated to constantly improving and innovating our baked goods to ensure our customers always have something new and exciting to try.",
      //   iconClass:{"fa fa-bullseye"},
      imageSrc: "https://img.icons8.com/office/56/null/goal--v1.png",
    },
    {
      title: "Our Vision",
      subtitle:
        "Our vision is to bring joy to our customers' lives through our delicious treats, making every day feel like a celebration.",
      //   iconClass={"fa fa-birthday-cake"},
      imageSrc: "https://img.icons8.com/dusk/56/null/cake.png",
    },
    {
      title: "What We do",
      subtitle:
        "We specialize in creating delicious and beautiful baked goods that are perfect for any occasion.",
      //   iconClass:{"fa fa-briefcase"},
      imageSrc: "https://img.icons8.com/office/56/null/briefcase.png",
    },
  ];

  const counterCardsData = [
    {
      imageSrc: "https://img.icons8.com/color/96/null/happy--v1.png",
      counterStart: 0,
      counterEnd: 250,
      title: "Happy Customers",
    },
    {
      imageSrc:
        "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/96/null/external-cake-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
      counterStart: 0,
      counterEnd: 24,
      title: "Cake Options",
    },
    {
      imageSrc: "https://img.icons8.com/officel/96/null/checked-truck.png",
      counterStart: 0,
      counterEnd: 159,
      title: "Deliveries Made",
    },
    {
      imageSrc:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/null/external-baker-professions-men-diversity-flaticons-lineal-color-flat-icons.png",
      counterStart: 0,
      counterEnd: 4,
      title: "Employees",
    },
  ];

  const teamsData = [
    { name: "Ishita Kapoor", designation: "Owner", imageSrc: Images.TEAM1 },
    {
      name: "Takashi Tanaka",
      designation: "Head Chef",
      imageSrc: Images.TEAM2,
    },
    { name: "Emily Thompson", designation: "Baker", imageSrc: Images.TEAM3 },
    { name: "Rohit Singh", designation: "Baker", imageSrc: Images.TEAM4 },
  ];

  const testimonialData = [
    {
      name: "Satoshi Suzuki",
      testimonial:
        "I am blown away by the quality and taste of the cakes from this bakery. Every bite was a heavenly experience.",
      imageSrc: Images.TESTMONIAL1,
      rating: 4,
    },
    {
      name: "Rhea Mehra",
      testimonial:
        "I couldn't get enough of the delicious cupcakes from this bakery. They were the perfect addition to my daughter's birthday party.",
      imageSrc: Images.TESTMONIAL2,
      rating: 4.5,
    },
    {
      name: "Ayumi Ishida",
      testimonial:
        "I ordered a custom cake for my sister's wedding and it was absolutely stunning. The attention to detail was impeccable and it tasted even better than it looked.",
      imageSrc: Images.TESTMONIAL3,
      rating: 5,
    },
    {
      name: "William Anderson",
      testimonial:
        "I was hesitant to order online, but the quick delivery and amazing taste of the baked goods from this bakery exceeded all of my expectations.",
      imageSrc: Images.TESTMONIAL4,
      rating: 4,
    },
  ];

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
      <AboutBox aboutPageData={aboutPageData} margin="0 0 80px 0" />
      <CounterCardsContainer
        counterCardsData={counterCardsData}
        margin="0 0 80px 0"
      />
      <TeamContainer teamsData={teamsData} margin="0 0 80px 0" />
      <TestimonialContainer testimonialData={testimonialData} />
    </AboutSection>
  );
}

export default AboutPage;
