import React from "react";
import cupcakeElement from "../../images/elements/cupcake_element.png";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../components/TitleSubtitleButtonBox";
import ImageBox from "../../components/ImageBox";

const CustomOrderSection = styled.section`
  background-color: #faf6f2;
  border: 4px solid #da5162;
  border-radius: 8px;
  margin: 80px 160px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function CustomOrder() {
  return (
    <CustomOrderSection>
      <ImageBox
        imageSrc={cupcakeElement}
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
        buttonText="Contact us"
        textBoxWidth="100%"
      />
    </CustomOrderSection>
  );
}

export default CustomOrder;
