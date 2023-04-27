import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../components/TitleSubtitleButtonBox";

interface IMenuPageProps {
  homepageSection?: boolean;
}

const MenuSection = styled.section<{
  homepageSection?: boolean;
}>`
  padding: ${(props) =>
    props.homepageSection ? "0px 80px 40px 80px" : "80px 80px 0px"};
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: ${(props) =>
      props.homepageSection ? "0px 20px 40px 20px" : "40px 20px"};
  }
`;

function MenuPage(props: IMenuPageProps) {
  const { homepageSection } = props;

  return (
    <MenuSection>
      <TitleSubtitleButtonBox
        title={{
          value: "Our Menu",
          variant: "h4",
          color: "#da5162",
          margin: "0 0 2rem 0",
        }}
        subtitle={{
          value: `Experience the indulgence of our signature desserts!
    Our menu is carefully crafted to satisfy every craving and delight every palate.`,
          variant: "body1",
          margin: "0 0 80px 0",
          preLineWrapper: true,
        }}
        textBoxWidth="100%"
        textAlign="center"
      />
    </MenuSection>
  );
}

export default MenuPage;
