import React from "react";
import styled from "styled-components";
import MenuCard, { IMenuCardProps } from "../MenuCard";

interface IMenuCardsContainerProps {
  menuItems: Array<IMenuCardProps>;
}

const MenuContainer = styled.div`
  @media only screen and (max-width: 992px) {
    .container-fluid {
      padding: 0px;
    }
  }
`;

function MenuCardsContainer(props: IMenuCardsContainerProps) {
  const { menuItems } = props;

  return (
    <MenuContainer>
      <div className="container-fluid">
        <div className="row">
          {menuItems.map((menuItem: IMenuCardProps, index: number) => (
            <div key={index} className="col-md-6">
              <MenuCard
                name={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
                imageSrc={menuItem.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </MenuContainer>
  );
}

export default MenuCardsContainer;
