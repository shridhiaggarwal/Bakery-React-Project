import React from "react";
import styled from "styled-components";

interface IIconButtonProps {
  children: any;
  onButtonClick?: () => void;
  margin?: string;
  className?: string;
}

const StyledButton = styled.button<{
  margin?: string;
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
  margin: ${(props) => props.margin};
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
  const { children, onButtonClick, margin, className } = props;

  const handleClick = () => {
    onButtonClick && onButtonClick();
  };

  return (
    <StyledButton type="button" onClick={handleClick} margin={margin} className={className}>
      {children}
    </StyledButton>
  );
}

export default IconButton;
