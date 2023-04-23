import React from "react";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";

interface IMiniAboutBoxProps {
  title: string;
  subtitle: string;
  iconClass?: string;
  imageSrc?: string;
}

const StyledAboutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const StyledContentBox = styled.div`
  width: 600px;
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 992px) {
    margin: 0 20px 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledMiniAboutBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const StyledIcon = styled.i`
  background-color: #fdf2d2;
  border-radius: 50%;
  padding: 16px;
  margin-right: 16px;
  color: #da5162;
  font-size: 24px;
`;

const StyledImage = styled.img`
  margin-top: 8px;
  margin-right: 24px;
`;

function MiniAboutBox(props: IMiniAboutBoxProps) {
  const { title, subtitle, iconClass, imageSrc } = props;
  return (
    <StyledMiniAboutBox>
      {iconClass && <StyledIcon className={iconClass}></StyledIcon>}
      {imageSrc && <StyledImage src={imageSrc} />}
      <div>
        <Typography
          variant="h6"
          color="#da5162"
          fontWeight="bold"
          margin="0 0 8px 0"
        >
          {title}
        </Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </div>
    </StyledMiniAboutBox>
  );
}

function AboutBox() {
  return (
    <StyledAboutBox>
      <StyledImageBox imageSrc={Images.CAKE_ELEMENT7} margin="0 80px 0 0" />
      <StyledContentBox>
        <MiniAboutBox
          title="Our Mission"
          subtitle="We are dedicated to constantly improving and innovating our baked goods to ensure our customers always have something new and exciting to try."
          //   iconClass={"fa fa-bullseye"}
          imageSrc="https://img.icons8.com/office/56/null/goal--v1.png"
        />
        <MiniAboutBox
          title="Our Vision"
          subtitle="Our vision is to bring joy to our customers' lives through our delicious treats, making every day feel like a celebration."
          //   iconClass={"fa fa-birthday-cake"}
          imageSrc="https://img.icons8.com/dusk/56/null/cake.png"
        />
        <MiniAboutBox
          title="What We do"
          subtitle="We specialize in creating delicious and beautiful baked goods that are perfect for any occasion."
          //   iconClass={"fa fa-briefcase"}
          imageSrc="https://img.icons8.com/office/56/null/briefcase.png"
        />
      </StyledContentBox>
    </StyledAboutBox>
  );
}

export default AboutBox;
