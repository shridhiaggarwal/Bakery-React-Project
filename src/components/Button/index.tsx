import styled from "styled-components";

interface IButtonProps {
  children: string;
  onButtonClick: () => void;
  marginTop?: string;
}

const StyledButton = styled.button<{
  marginTop?: string;
}>`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  padding: 8px 24px;
  background-color: #da5162;
  color: white;
  border: 2px solid #da5162;
  border-radius: 8px;
  margin-top: ${props => props.marginTop ? props.marginTop : "2.5rem"};
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
  const { children, onButtonClick, marginTop } = props;

  const handleClick = () => {
    onButtonClick();
  };

  return <StyledButton onClick={handleClick} marginTop={marginTop}>{children}</StyledButton>;
}

export default Button;
