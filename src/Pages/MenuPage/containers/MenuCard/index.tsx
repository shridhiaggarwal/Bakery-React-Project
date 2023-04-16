import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/Typography";

export interface IMenuCardProps {
  name: string;
  price: number;
  description: string;
  imageSrc: string;
}

const StyledMenuCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #faf6f2;
  border-left: 4px solid #da5162;
  border-right: 2px dotted transparent;
  border-top: 2px dotted transparent;
  border-bottom: 2px dotted white;
  border-radius: 8px;
  position: relative;
  padding: 30px;
  margin-bottom: 2rem;
  &:hover {
    border-right: 2px dotted #da5162;
    border-top: 2px dotted #da5162;
    border-bottom: 2px dotted #da5162;
    border-radius: 8px;
  }
  @media only screen and (max-width: 576px) {
    padding: 12px;
    flex-direction: column-reverse;
  }
`;

const MenuCardText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

const MenuNamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px dotted #da5162;
`;

const StyledWrapTypography = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MenuCardImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid #da5162;
  border-radius: 50%;
  @media only screen and (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

function MenuCard(props: IMenuCardProps) {
  const { name, price, description, imageSrc } = props;

  return (
    <StyledMenuCard>
      <MenuCardText>
        <MenuNamePrice>
          <Typography variant="h5" fontWeight="bold" color="#da5162">
            {name}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            <i className="fa fa-inr" aria-hidden="true"></i> {price}
          </Typography>
        </MenuNamePrice>
        <StyledWrapTypography variant="body1">
          {description}
        </StyledWrapTypography>
      </MenuCardText>
      <div>
        <a target="_blank" href={imageSrc}>
          <MenuCardImage src={imageSrc} />
        </a>
      </div>
    </StyledMenuCard>
  );
}

export default MenuCard;
