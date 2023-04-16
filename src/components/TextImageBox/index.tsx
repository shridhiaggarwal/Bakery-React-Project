import React from "react";
import styled from "styled-components";
import ImageBox from "../ImageBox";

interface ITextImageBoxProps {
  height?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  textBoxContent: {
    title: string;
    subtitle?: string;
    buttonText?: string;
    textAlign?: string;
  };
  imageBoxContent: {
    backgroundImageSrc?: string;
    leftImageSrc?: string;
    rightImageSrc?: string;
    margin?: string;
  };
}

const TextImageSection = styled.section<{
  height?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${(props) => props.padding};
`;

function TextImageBox(props: ITextImageBoxProps) {
  const {
    height,
    backgroundColor,
    margin,
    padding,
    textBoxContent,
    imageBoxContent,
  } = props;

  return (
    <TextImageSection
      height={height}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
    >
      {imageBoxContent.leftImageSrc && (
        <ImageBox
          backgroundImageSrc={imageBoxContent.backgroundImageSrc}
          imageSrc={imageBoxContent.leftImageSrc}
          margin={imageBoxContent.margin}
        />
      )}
      {/* <TitleSubtitleButtonBox
        title={textBoxContent.title}
        subtitle={textBoxContent.subtitle}
        buttonText={textBoxContent.buttonText}
        textAlign={textBoxContent.textAlign}
      /> */}
      {imageBoxContent.rightImageSrc && (
        <ImageBox
          backgroundImageSrc={imageBoxContent.backgroundImageSrc}
          imageSrc={imageBoxContent.rightImageSrc}
          margin={imageBoxContent.margin}
        />
      )}
    </TextImageSection>
  );
}

export default TextImageBox;
