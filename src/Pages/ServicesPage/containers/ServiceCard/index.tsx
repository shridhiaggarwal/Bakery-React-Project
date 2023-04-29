import React from "react";
import styled from "styled-components";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import Button from "../../../../components/Button";

export interface IServiceCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  button?: {
    text: string;
    onClick: () => void;
  }
}

const StyledServiceCard = styled.div`
  width: inherit;
  height: 380px;
  background-color: #faf6f2;
  padding: 90px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: 4px solid white;
  border-radius: 8px;
  position: relative;
  &:hover {
    border: 4px solid #da5162;
    border-radius: 8px;
    > img:first-child {
      transform: rotate(10deg);
      transition: 300ms linear all;
    }
  }
`;

const StyledServiceImage = styled.img`
  width: 120px !important;
  height: 120px;
  position: absolute;
  border: 12px solid white;
  border-radius: 50%;
  box-shadow: 6px 6px #da5162;
  top: -18%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
`;

function ServiceCard(props: IServiceCardProps) {
  const { title, subtitle, imageSrc, button } = props;

  const handleButtonClick = () => {
    button && button.onClick();
  };

  return (
    <StyledServiceCard>
      <StyledServiceImage src={imageSrc} />
      <TitleSubtitleButtonBox
        title={{
          value: title,
          variant: "h5",
          color: "#da5162",
          fontWeight: "bold",
          margin: "0 0 1rem 0",
        }}
        subtitle={{
          value: subtitle,
          variant: "body1",
        }}
        textAlign="center"
      />
      {button && <Button onButtonClick={handleButtonClick}>{button.text}</Button>}
    </StyledServiceCard>
  );
}

export default ServiceCard;
