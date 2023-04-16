import React from "react";
import styled from "styled-components";

export const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  caption: "caption",
};

const StyledH1 = styled.h1<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Satisfy, cursive"};
  font-size: 4rem;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bolder")};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  @media (max-width: 992px) {
    font-size: 2.875rem;
  }
`;

const StyledH2 = styled.h2<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Satisfy, cursive"};
  font-size: 4rem;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bolder")};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  @media (max-width: 992px) {
    font-size: 2.875rem;
  }
`;

const StyledH3 = styled.h3<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
  lineHeight?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Paytone One, sans-serif"};
  font-size: 2.875rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "52px")};
  @media (max-width: 576px) {
    font-size: 1.75rem;
    line-height: initial;
  }
`;

const StyledH4 = styled.h4<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Satisfy, cursive"};
  font-size: 2.875rem;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bolder")};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

const StyledH5 = styled.h5<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Satisfy, cursive"};
  font-size: 1.75rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

const StyledH6 = styled.h6<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Montserrat, sans-serif"};
  font-size: 1.25rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

const StyledBody1 = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Montserrat, sans-serif"};
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

const StyledCaption = styled.caption<{
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
  textAlign?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Montserrat, sans-serif"};
  font-size: 0.875rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

interface ITypographyProps {
  variant?: keyof typeof variantsMapping;
  color?: string;
  fontFamily?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  lineHeight?: string;
  children: any;
}

function Typography(props: ITypographyProps) {
  const { variant, color, children, ...rest } = props;

  if (variant === "h1") {
    return (
      <StyledH1 color={color} {...rest}>
        {children}
      </StyledH1>
    );
  }
  if (variant === "h2") {
    return (
      <StyledH2 color={color} {...rest}>
        {children}
      </StyledH2>
    );
  }
  if (variant === "h3") {
    return (
      <StyledH3 color={color} {...rest}>
        {children}
      </StyledH3>
    );
  }
  if (variant === "h4") {
    return (
      <StyledH4 color={color} {...rest}>
        {children}
      </StyledH4>
    );
  }
  if (variant === "h5") {
    return (
      <StyledH5 color={color} {...rest}>
        {children}
      </StyledH5>
    );
  }
  if (variant === "h6") {
    return (
      <StyledH6 color={color} {...rest}>
        {children}
      </StyledH6>
    );
  }
  if (variant === "caption") {
    return (
      <StyledCaption color={color} {...rest}>
        {children}
      </StyledCaption>
    );
  }

  return (
    <StyledBody1 color={color} {...rest}>
      {children}
    </StyledBody1>
  );
}

export default Typography;

/* 
old
caption 14px; 0.875rem - only nav and captions
body 16px; 1rem - body default
h6 20px; 1.25rem - small heading - bannerCarousel p
h5 28px; 1.75rem - service box h6, quote box
32px 2rem
h4 46px; 2.875rem - large heading - made with love, services
h3 64px; 4rem - extra large heading- bannerCarousel 
*/
