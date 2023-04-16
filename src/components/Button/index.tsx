import styled from "styled-components";

interface IButtonProps {
  children: string;
  onButtonClick: () => void;
}

const StyledButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  padding: 8px 24px;
  background-color: #da5162;
  color: white;
  border: 2px solid #da5162;
  border-radius: 8px;
  margin-top: 2.5rem;
  text-transform: uppercase;
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

function Button(props: IButtonProps) {
  const { children, onButtonClick } = props;

  const handleClick = () => {
    onButtonClick();
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

export default Button;
