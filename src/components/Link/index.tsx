import styled from "styled-components";
import Typography, { variantsMapping } from "../Typography";

interface ILinkProps {
  textValue: string;
  textVariant: keyof typeof variantsMapping;
  onLinkClick: () => void;
  margin?: string;
}

const StyledLink = styled.a<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
  text-decoration: none;
  cursor: pointer;
`;

function CommonLink(props: ILinkProps) {
  const { textValue, textVariant, onLinkClick, margin } = props;

  const handleClick = () => {
    onLinkClick();
  };

  return (
    <StyledLink onClick={handleClick} margin={margin}>
      <Typography variant={textVariant || "caption"} color="#da5162">{textValue}</Typography>
    </StyledLink>
  );
}

export default CommonLink;
