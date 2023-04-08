import iceCreamElement from "../../../../images/elements/icecream_element.png";
import cakeElement from "../../../../images/elements/cake_element.png";
import backgroundImage from "../../../../images/backgrounds/background1.png";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";

const OfferOfWeekSection = styled.section`
  height: 360px;
  background-color: #fdf2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 80px;
`;

const ElementImage = styled.img`
  position: absolute;
  top: 58%;
  left: 5%;
  height: 200px;
  transform: rotate(-28deg);
`;

function OfferOfWeek() {
  return (
    <>
      <OfferOfWeekSection>
        <ElementImage src={iceCreamElement} />
        <TitleSubtitleButtonBox
          title="Offer of the Week"
          subtitle="Treat yourself with our delicious offer of the week - buy any dessert and get a scoop of ice cream for free."
          buttonText="Check our menu"
          textAlign="center"
        />
        <ImageBox backgroundImageSrc={backgroundImage} imageSrc={cakeElement} />
      </OfferOfWeekSection>
    </>
  );
}

export default OfferOfWeek;
