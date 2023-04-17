import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import Images from "../../../../components/Images";
import { useNavigate } from "react-router";

const OfferOfWeekSection = styled.section`
  height: 360px;
  background-color: #fdf2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 80px;
  min-width: 0;
  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

const ElementImage = styled.img`
  position: absolute;
  top: 58%;
  left: 5%;
  height: 200px;
  transform: rotate(-28deg);
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function OfferOfWeek() {
  const navigate = useNavigate();

  const handleMenuButton = () => {
    navigate("/menu");
  };

  return (
    <>
      <OfferOfWeekSection>
        <ElementImage src={Images.ICECREAM_ELEMENT1} />
        <TitleSubtitleButtonBox
          title={{
            value: "Offer of the Week",
            variant: "h4",
            color: "#da5162",
            margin: "0 0 1rem 0",
          }}
          subtitle={{
            value:
              "Treat yourself with our delicious offer of the week - buy any dessert and get a scoop of ice cream for free.",
            variant: "body1",
          }}
          button={{
            text: "Check our menu",
            onClick: handleMenuButton
          }}
          textAlign="center"
        />
        <StyledImageBox
          backgroundImageSrc={Images.BACKGROUND1}
          imageSrc={Images.CAKE_ELEMENT1}
        />
      </OfferOfWeekSection>
    </>
  );
}

export default OfferOfWeek;
