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
`;

function CompleteMenuBox() {
  return (
    <CompleteMenuSection>
      <TitleSubtitleButtonBox
        title="More to Love"
        subtitle="If you thought that was good, wait until you see what else we have to offer! Head to our menu section for a complete list of desserts that will leave you wanting more."
        buttonText="Explore complete menu"
      />
      <ImageBox backgroundImageSrc={backgeroundImage} imageSrc={cakeElement} />
    </CompleteMenuSection>
  );
}

export default CompleteMenuBox;
