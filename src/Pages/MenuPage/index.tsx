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
  padding: 80px;
  @media only screen and (max-width: 992px) {
    padding: 80px 20px;
  }
`;

const StyledDivider = styled.hr`
  margin: 8px 0 48px 0;
  border-top: 2px dotted #da5162;
`;

export const menuItems = [
  {
    name: "Almond Cake",
    price: 570,
    description:
      "Rich, moist chocolate cake layers sandwiched with creamy chocolate frosting for the ultimate indulgence.",
    imageSrc: Images.MENU1,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Birthday Cake",
    price: 960,
    description: "A mouthwatering dessert that's perfect for any occasion",
    imageSrc: Images.MENU2,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Penguin Cake",
    price: 1050,
    description:
      "Carefully crafted with attention to detail and a focus on flavor",
    imageSrc: Images.MENU3,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Vanilla Cake",
    price: 450,
    description:
      "Light and fluffy vanilla cake made with real vanilla beans and topped with silky buttercream frosting in your choice of flavors.",
    imageSrc: Images.MENU4,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Butterfly Cake",
    price: 960,
    description:
      "A simple yet elegant dessert, this cake features layers of buttery shortcake, sweet strawberries, and whipped cream.",
    imageSrc: Images.MENU5,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Fruit Cake",
    price: 570,
    description: "Perfectly balanced, with just the right amount of sweetness",
    imageSrc: Images.MENU6,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Chocolate Cake",
    price: 450,
    description: "Baking is love made visible",
    imageSrc: Images.MENU7,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Red Velvet Cake",
    price: 450,
    description: "Sweeten up your day with our treats.",
    imageSrc: Images.MENU19,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Strawberry Cake",
    price: 450,
    description:
      "Made with the finest ingredients for a truly indulgent experience",
    imageSrc: Images.MENU18,
    catergory: MenuItemType.CAKE,
  },
  {
    name: "Red Velvet",
    price: 50,
    description:
      "Our pastries are made with the finest ingredients, baked to perfection and filled with heavenly flavors.",
    imageSrc: Images.MENU12,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Pineapple Pastry",
    price: 25,
    description:
      "Indulge in the decadence of our light, flaky pastries filled with sweet or savory delights.",
    imageSrc: Images.MENU13,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Chocolate Pastry",
    price: 50,
    description:
      "Our pastries are a delicious combination of buttery, flaky layers and rich, flavorful fillings",
    imageSrc: Images.MENU14,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Orange Pastry",
    price: 35,
    description:
      "Our pastries are not just a treat for your taste buds, but also a feast for your eyes with their beautifully crafted designs.",
    imageSrc: Images.MENU15,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Mango Pastry",
    price: 45,
    description:
      "Treat yourself to our delicate, melt-in-your-mouth pastries that are a perfect accompaniment to your favorite beverage.",
    imageSrc: Images.MENU16,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Coffee Pastry",
    price: 85,
    description:
      "A coffee lover's dream, this cake is rich, dense, and topped with a luscious ganache for an extra decadent touch.",
    imageSrc: Images.MENU20,
    catergory: MenuItemType.PASTRY,
  },
  {
    name: "Berry Pastry",
    price: 25,
    description: "Our pastries are baked with love and perfection.",
    imageSrc: Images.MENU21,
    catergory: MenuItemType.PASTRY,
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
    price: 60,
    description:
      "Bite into our cupcakes and experience the perfect combination of moist cake and creamy frosting in every bite",
    imageSrc: Images.MENU9,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Mint Cupcake",
    price: 60,
    description:
      "Indulge in our delicious cupcakes, topped with our signature frosting and decorated with care",
    imageSrc: Images.MENU10,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Choco Cupcake",
    price: 60,
    description:
      "Our cupcakes are handcrafted with love and attention to detail, ensuring that every customer leaves with a smile.",
    imageSrc: Images.MENU11,
    catergory: MenuItemType.CUPCAKE,
  },
  {
    name: "Bun Bun",
    price: 100,
    description:
      "An unforgettable flavor experience that will leave you wanting more.",
    imageSrc: Images.MENU17,
    catergory: MenuItemType.CUPCAKE,
  },
];

const tabsListItems = [
  {
    value: "Cakes",
    tabCategory: MenuItemType.CAKE,
  },
  {
    value: "Pastries",
    tabCategory: MenuItemType.PASTRY,
  },
  {
    value: "Cupcakes and others",
    tabCategory: MenuItemType.CUPCAKE,
  },
];

function MenuPage(props: IMenuPageProps) {
  const { homepageSection } = props;
  const [filteredMenuItems, setFilteredMenuItems] =
    useState<Array<IMenuCardProps>>(menuItems);
  const [activeTab, setActiveTab] = useState<string>(MenuItemType.CAKE);

  const getFilteredMenuItems = (category: string) => {
    let filtered: Array<IMenuCardProps> = menuItems.filter(
      (item) => item.catergory === category
    );
    setFilteredMenuItems(filtered);
  };

  React.useEffect(() => {
    if (activeTab) {
      getFilteredMenuItems(activeTab);
    }
  }, [activeTab]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          margin: homepageSection ? "0 0 80px 0" : "0 0 40px 0",
          preLineWrapper: true,
        }}
        textAlign="center"
      />
      <div>
        {!homepageSection && (
          <>
            <Tabs
              tabsList={tabsListItems}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <StyledDivider />
          </>
        )}
        <MenuCardsContainer
          menuItems={
            homepageSection ? menuItems.slice(0, 6) : filteredMenuItems
          }
        />
      </div>
    </MenuSection>
  );
}

export default MenuPage;
