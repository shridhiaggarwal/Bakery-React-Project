import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Typography, { variantsMapping } from "../Typography";

interface ITypographyProps {
  value: string;
  variant: keyof typeof variantsMapping;
  color?: string;
  fontFamily?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}

interface ITitleSubtitleButtonBoxProps {
  title: ITypographyProps;
  subtitle?: ITypographyProps;
  buttonText?: string;
  textAlign?: string;
  textBoxWidth?: string;
}

const TextBox = styled.div<{
  width?: string;
  textAlign?: string;
}>`
  width: ${(props) => (props.width ? props.width : "600px")};
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
  const { title, subtitle, buttonText, textAlign, textBoxWidth } = props;

  const titleProps = {
    variant: title.variant,
    color: title.color,
    fontFamily: title.fontFamily,
    fontWeight: title.fontWeight,
    margin: title.margin,
    padding: title.padding,
  };

  const subtitleProps = {
    variant: subtitle && subtitle.variant,
    color: subtitle && subtitle.color,
    fontFamily: subtitle && subtitle.fontFamily,
    fontWeight: subtitle && subtitle.fontWeight,
    margin: subtitle && subtitle.margin,
    padding: subtitle && subtitle.padding,
  };

  return (
    <TextBox textAlign={textAlign} width={textBoxWidth}>
      <Typography {...titleProps}>{title.value}</Typography>
      {subtitle && <Typography {...subtitleProps}>{subtitle.value}</Typography>}
      {/* <TextBoxTitle>{title}</TextBoxTitle>
      {subtitle && <TextBoxSubtitle>{subtitle}</TextBoxSubtitle>} */}
      {buttonText && <Button>{buttonText}</Button>}
    </TextBox>
  );
}

export default TitleSubtitleButtonBox;
