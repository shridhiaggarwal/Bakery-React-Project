import React from "react";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";

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
  margin-bottom: 16px;
`;

const StyledIcon = styled.i`
  background-color: #fdf2d2;
  border-radius: 50%;
  padding: 16px;
  margin-right: 16px;
  color: #da5162;
  font-size: 24px;
`;

function MiniAboutBox(props: any) {
  const { title, subtitle, iconClass } = props;
  return (
    <StyledMiniAboutBox>
      <StyledIcon className={iconClass}></StyledIcon>
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
          iconClass={"fa fa-bullseye"}
        />
        <MiniAboutBox
          title="Our Vision"
          subtitle="Our vision is to bring joy to our customers' lives through our delicious treats, making every day feel like a celebration."
          iconClass={"fa fa-birthday-cake"}
        />
        <MiniAboutBox
          title="What We do"
          subtitle="We specialize in creating delicious and beautiful baked goods that are perfect for any occasion."
          iconClass={"fa fa-briefcase"}
        />
      </StyledContentBox>
    </StyledAboutBox>
  );
}

export default AboutBox;
