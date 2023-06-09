import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import ImageBox from "../../../../components/ImageBox";
import Images from "../../../../components/Images"
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleMenuButton = () => {
    navigate("/menu");
  };

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
        button={{
          text: "Explore complete menu",
          onClick: handleMenuButton
        }}
        textBoxWidth="800px"
      />
      <StyledImageBox
        backgroundImageSrc={Images.BACKGROUND1}
        imageSrc={Images.CAKE_ELEMENT4}
      />
    </CompleteMenuSection>
  );
}

export default CompleteMenuBox;
