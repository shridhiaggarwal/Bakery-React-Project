import React from "react";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import backgroundImage2 from "../../../../images/backgrounds/background2.png";
import donutImage from "../../../../images/elements/donut_element.png";

const QuoteBoxSection = styled.section`
  height: 360px;
  background-color: #fdf2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage2});
  background-repeat: no-repeat;
  background-position: left;
  padding: 20px 80px;
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function QuoteBox() {
  return (
    <QuoteBoxSection>
      <StyledImageBox
        imageSrc={donutImage}
        margin="0 80px 0 0"
      />
      <TitleSubtitleButtonBox
        title={{
          value:
            '"Baking is a language that speaks to the heart. It has the power to transport us to a different time and place, to evoke memories of childhood, of holidays, of loved ones."',
          variant: "h5",
          color: "#da5162",
          fontWeight: "bolder",
        }}
        textBoxWidth="100%"
      />
    </QuoteBoxSection>
  );
}

export default QuoteBox;
