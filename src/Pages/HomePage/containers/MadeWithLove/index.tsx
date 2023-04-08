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
`;

function MadeWithLove() {
  return (
    <>
      <MadeWithLoveSection>
        <ImageBox imageSrc={cakeElement} margin={"0 80px 0 0"} />
        <TitleSubtitleButtonBox
          title="Made with love"
          subtitle="At Bakery, we believe that the secret ingredient to our baked goods is love. That's why we put our heart and soul into every item we make, from the freshest ingredients to the final touches of decoration. We hope you can taste the love we put into each and every bite."
          buttonText="Read more"
        />
      </MadeWithLoveSection>
    </>
  );
}

export default MadeWithLove;
