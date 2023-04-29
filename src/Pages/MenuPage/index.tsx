import React, { useState } from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../components/TitleSubtitleButtonBox";
import Images from "../../components/Images";
import MenuCardsContainer from "./containers/MenuCardsContainer";
import { IMenuCardProps } from "./containers/MenuCard";
import { MenuItemType } from "../../constant";
import Tabs from "../../components/Tabs";

interface IMenuPageProps {
  homepageSection?: boolean;
}

const MenuSection = styled.section<{
  homepageSection?: boolean;
}>`
  padding: ${(props) =>
    props.homepageSection ? "0px 80px 40px 80px" : "80px"};
  @media only screen and (max-width: 992px) {
    padding: ${(props) =>
      props.homepageSection ? "0px 20px 40px 20px" : "40px 20px"};
  }
`;

const StyledDivider = styled.hr`
  margin: 8px 0 48px 0;
  border-top: 2px dotted #da5162;
`;

const menuItems = [
  {
    name: "Chocolate Cake",
    price: 250,
    description:
      "Rich, moist chocolate cake layers sandwiched with creamy chocolate frosting for the ultimate indulgence.",
    imageSrc: Images.MENU1,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Birthday Cake",
    price: 250,
    description: "A mouthwatering dessert that's perfect for any occasion",
    imageSrc: Images.MENU2,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Penguin Cake",
    price: 250,
    description:
      "Carefully crafted with attention to detail and a focus on flavor",
    imageSrc: Images.MENU3,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Vanilla Cake",
    price: 250,
    description:
      "Light and fluffy vanilla cake made with real vanilla beans and topped with silky buttercream frosting in your choice of flavors.",
    imageSrc: Images.MENU4,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Butterfly Cake",
    price: 250,
    description:
      "A simple yet elegant dessert, this cake features layers of buttery shortcake, sweet strawberries, and whipped cream.",
    imageSrc: Images.MENU5,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Fruit Cake",
    price: 250,
    description: "Perfectly balanced, with just the right amount of sweetness",
    imageSrc: Images.MENU6,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Chocolate Cake",
    price: 250,
    description: "Baking is love made visible",
    imageSrc: Images.MENU7,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Cupcake Box",
    price: 250,
    description:
      "Our cupcakes are made with the finest ingredients, ensuring each bite is an explosion of flavor.",
    imageSrc: Images.MENU8,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Berry Cupcake",
    price: 250,
    description:
      "Bite into our cupcakes and experience the perfect combination of moist cake and creamy frosting in every bite",
    imageSrc: Images.MENU9,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Mint Cupcake",
    price: 250,
    description:
      "Indulge in our delicious cupcakes, topped with our signature frosting and decorated with care",
    imageSrc: Images.MENU10,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Choco Cupcake",
    price: 250,
    description:
      "Our cupcakes are handcrafted with love and attention to detail, ensuring that every customer leaves with a smile.",
    imageSrc: Images.MENU11,
    catergory: MenuItemType.CUPCAKE,
  },
];

function MenuPage(props: IMenuPageProps) {
  const { homepageSection } = props;
  const [filteredMenuItems, setFilteredMenuItems] =
    useState<Array<IMenuCardProps>>(menuItems);

  const getFilteredMenuItems = (category: string) => {
    let filtered: Array<IMenuCardProps> = menuItems.filter(
      (item) => item.catergory === category
    );
    setFilteredMenuItems(filtered);
  };

  React.useEffect(() => {
    getFilteredMenuItems(MenuItemType.CAKE);
  }, []);

  const tabsListItems = [
    {
      value: "Cakes",
      onTabClick: getFilteredMenuItems,
      tabCategory: MenuItemType.CAKE,
    },
    {
      value: "Pastries",
      onTabClick: getFilteredMenuItems,
      tabCategory: MenuItemType.PASTRY,
    },
    {
      value: "Cupcakes and others",
      onTabClick: getFilteredMenuItems,
      tabCategory: MenuItemType.CUPCAKE,
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
          margin: "0 0 40px 0",
          preLineWrapper: true,
        }}
        textBoxWidth="100%"
        textAlign="center"
      />
      <div>
        <Tabs tabsList={tabsListItems} defaultActiveTab={MenuItemType.CAKE} />
        <StyledDivider />
        <MenuCardsContainer menuItems={filteredMenuItems} />
      </div>
    </MenuSection>
  );
}

export default MenuPage;
