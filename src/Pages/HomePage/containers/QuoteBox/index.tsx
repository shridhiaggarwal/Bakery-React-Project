import React from "react";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import Images from "../../../../components/Images"

const QuoteBoxSection = styled.section`
  height: 360px;
  background-color: #fdf2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Images.BACKGROUND2});
  background-repeat: no-repeat;
  background-position: left;
  padding: 20px 80px;
  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 992px) {
    margin: 0 20px 0 0;
  }
  @media only screen and (max-width: 768px) {
    width: 200px;
  }
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

function QuoteBox() {
  return (
    <QuoteBoxSection>
      <StyledImageBox imageSrc={Images.DONUT_ELEMENT1} margin="0 80px 0 0" />
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
