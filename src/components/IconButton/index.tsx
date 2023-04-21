import React from "react";
import styled from "styled-components";

interface IIconButtonProps {
  children: any;
  onButtonClick?: () => void;
  marginTop?: string;
  marginLeft?: string;
}

const StyledButton = styled.button<{
  marginTop?: string;
  marginLeft?: string;
}>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #da5162;
  color: white;
  border: 2px solid #da5162;
  border-radius: 4px;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  &:hover,
  &:active {
    background-color: transparent;
    color: #da5162;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

function IconButton(props: IIconButtonProps) {
  const { children, onButtonClick, marginTop, marginLeft } = props;

  const handleClick = () => {
    onButtonClick && onButtonClick();
  };

  return (
    <StyledButton
      onClick={handleClick}
      marginTop={marginTop}
      marginLeft={marginLeft}
    >
      {children}
    </StyledButton>
  );
}

export default IconButton;
