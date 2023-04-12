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
  title?: ITypographyProps;
  subtitle?: ITypographyProps;
  buttonText?: string;
  textAlign?: string;
  textBoxWidth?: string;
  customTitle?: React.ReactNode;
}

const TextBox = styled.div<{
  width?: string;
  textAlign?: string;
}>`
  width: ${(props) => (props.width ? props.width : "600px")};
  text-align: ${(props) => props.textAlign};
`;

function TitleSubtitleButtonBox(props: ITitleSubtitleButtonBoxProps) {
  const { title, subtitle, buttonText, textAlign, textBoxWidth, customTitle } =
    props;

  const titleProps = {
    variant: title && title.variant,
    color: title && title.color,
    fontFamily: title && title.fontFamily,
    fontWeight: title && title.fontWeight,
    margin: title && title.margin,
    padding: title && title.padding,
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
      {customTitle ? (
        customTitle
      ) : (
        <Typography {...titleProps}>{title && title.value}</Typography>
      )}
      {subtitle && <Typography {...subtitleProps}>{subtitle.value}</Typography>}
      {buttonText && <Button>{buttonText}</Button>}
    </TextBox>
  );
}

export default TitleSubtitleButtonBox;
