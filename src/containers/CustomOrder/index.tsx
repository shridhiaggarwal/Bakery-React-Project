import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../components/TitleSubtitleButtonBox";
import ImageBox from "../../components/ImageBox";
import Images from "../../components/Images"
import { useNavigate } from "react-router";

const CustomOrderSection = styled.section`
  background-color: #faf6f2;
  border: 4px solid #da5162;
  border-radius: 8px;
  margin: 80px 160px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 1200px) {
    margin: 80px;
  }
  @media only screen and (max-width: 992px) {
    margin: 80px 20px;
  }
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function CustomOrder() {
  const navigate = useNavigate();

  const handleContactButton = () => {
    navigate("/contact");
  };

  return (
    <CustomOrderSection>
      <StyledImageBox
        imageSrc={Images.CUPCAKE_ELEMENT1}
        margin="0 50px 0 0"
        imageWidth="200px"
      />
      <TitleSubtitleButtonBox
        title={{
          value: "Custom Orders",
          variant: "h4",
          color: "#da5162",
          margin: "0 0 1rem 0",
        }}
        subtitle={{
          value:
            "At our bakery, we understand that everyone has unique tastes and preferences. That's why we offer a custom order service that allows you to create a dessert that's uniquely yours. Whether it's a specific flavor or a particular design, we'll work with you to create something truly special.",
          variant: "body1",
        }}
        button={{
          text: "Contact us",
          onClick: handleContactButton
        }}
        textBoxWidth="100%"
      />
    </CustomOrderSection>
  );
}

export default CustomOrder;
