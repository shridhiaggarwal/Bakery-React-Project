import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import MenuCardsContainer from "../../../MenuPage/containers/MenuCardsContainer";
import menuImage1 from "../../../../images/menu/menu1.jpg";
import menuImage2 from "../../../../images/menu/menu2.jpg";
import menuImage3 from "../../../../images/menu/menu3.jpg";
import menuImage4 from "../../../../images/menu/menu4.jpg";
import menuImage5 from "../../../../images/menu/menu5.jpg";
import menuImage6 from "../../../../images/menu/menu6.jpg";

const MenuSection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 80px 20px;
  }
`;

function MenuHomePage() {
  const menuItems = [
    {
      name: "Chocolate Cake",
      price: 250,
      description:
        "Rich, moist chocolate cake layers sandwiched with creamy chocolate frosting for the ultimate indulgence.",
      imageSrc: menuImage1,
    },
    {
      name: "Birthday Cake",
      price: 250,
      description: "A mouthwatering dessert that's perfect for any occasion",
      imageSrc: menuImage2,
    },
    {
      name: "Penguin Cake",
      price: 250,
      description:
        "Carefully crafted with attention to detail and a focus on flavor",
      imageSrc: menuImage3,
    },
    {
      name: "Vanilla Cake",
      price: 250,
      description:
        "Light and fluffy vanilla cake made with real vanilla beans and topped with silky buttercream frosting in your choice of flavors.",
      imageSrc: menuImage4,
    },
    {
      name: "Butterfly Cake",
      price: 250,
      description:
        "A simple yet elegant dessert, this cake features layers of buttery shortcake, sweet strawberries, and whipped cream.",
      imageSrc: menuImage5,
    },
    {
      name: "Fruit Cake",
      price: 250,
      description:
        "Perfectly balanced, with just the right amount of sweetness",
      imageSrc: menuImage6,
    },
  ];

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
      <MenuCardsContainer menuItems={menuItems} />
    </MenuSection>
  );
}

export default MenuHomePage;
