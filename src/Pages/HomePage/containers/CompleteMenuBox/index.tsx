import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import ImageBox from "../../../../components/ImageBox";
import cakeElement from "../../../../images/elements/cake_element4.png";
import backgeroundImage from "../../../../images/backgrounds/background1.png";

const CompleteMenuSection = styled.section`
  height: 360px;
  background-color: #fdf2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 80px;
  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

const StyledImageBox = styled(ImageBox)`
  > img:first-child {
    @media only screen and (max-width: 768px) {
      width: 200px;
    }
  }
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

function CompleteMenuBox() {
  return (
    <CompleteMenuSection>
      <TitleSubtitleButtonBox
        title={{
          value: "More to Love",
          variant: "h4",
          color: "#da5162",
          margin: "0 0 1rem 0",
        }}
        subtitle={{
          value:
            "If you thought that was good, wait until you see what else we have to offer! Head to our menu section for a complete list of desserts that will leave you wanting more.",
          variant: "body1",
        }}
        buttonText="Explore complete menu"
      />
      <StyledImageBox
        backgroundImageSrc={backgeroundImage}
        imageSrc={cakeElement}
      />
    </CompleteMenuSection>
  );
}

export default CompleteMenuBox;
