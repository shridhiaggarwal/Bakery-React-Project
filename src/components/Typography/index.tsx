import React from "react";
import styled from "styled-components";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
};

const h1 = styled.h1<{
  color: string;
  fontSize?: string;
  fontWeight?: string | number;
  margin?: string;
  padding?: string;
}>`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ITypographyProps {
  variant?: keyof typeof variantsMapping;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  children: any;
}

function Typography(props: ITypographyProps) {
  const { variant, color, fontSize, fontWeight, children, ...rest } = props;
  const Component: any = variant
    ? variantsMapping[variant as keyof typeof variantsMapping]
    : "p";

  return (
    <Component
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Typography;