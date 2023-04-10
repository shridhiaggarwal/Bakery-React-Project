import React from "react";
import cakeElement from "../../../../images/elements/cupcake_element2.png";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import ImageBox from "../../../../components/ImageBox";

const MadeWithLoveSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  @media only screen and (max-width: 992px) {
    padding: 80px 20px;
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

function MadeWithLove() {
  return (
    <>
      <MadeWithLoveSection>
        <StyledImageBox imageSrc={cakeElement} margin={"0 80px 0 0"} />
        <TitleSubtitleButtonBox
          title={{
            value: "Made with love",
            variant: "h4",
            color: "#da5162",
            margin: "0 0 1rem 0",
          }}
          subtitle={{
            value:
              "At Bakery, we believe that the secret ingredient to our baked goods is love. That's why we put our heart and soul into every item we make, from the freshest ingredients to the final touches of decoration. We hope you can taste the love we put into each and every bite.",
            variant: "body1",
          }}
          buttonText="Read more"
        />
      </MadeWithLoveSection>
    </>
  );
}

export default MadeWithLove;
