import React from "react";
import styled from "styled-components";
import Button from "../Button";

interface ITitleSubtitleButtonBoxProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  textAlign?: string;
}

const TextBox = styled.div<{
  textAlign?: string;
}>`
  width: 600px;
  text-align: ${(props) => props.textAlign};
`;

const TextBoxTitle = styled.h4`
  font-family: "Satisfy", "cursive";
  font-size: 2.875rem;
  font-weight: bolder;
  color: #da5162;
  margin-bottom: 1rem;
`;

const TextBoxSubtitle = styled.p`
  font-family: "Montserrat", sans-serif;
`;

function TitleSubtitleButtonBox(props: ITitleSubtitleButtonBoxProps) {
  const { title, subtitle, buttonText, textAlign } = props;

  return (
    <TextBox textAlign={textAlign}>
      <TextBoxTitle>{title}</TextBoxTitle>
      {subtitle && <TextBoxSubtitle>{subtitle}</TextBoxSubtitle>}
      {buttonText && <Button>{buttonText}</Button>}
    </TextBox>
  );
}

export default TitleSubtitleButtonBox;
