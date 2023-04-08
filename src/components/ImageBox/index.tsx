import React from "react";
import styled from "styled-components";

interface IImageBoxProps {
  backgroundImageSrc?: string;
  imageSrc?: string;
  margin?: string;
  imageWidth?: string;
}

const ImageSection = styled.div<{
  backgroundImageSrc?: string;
}>`
  height: 100%;
  width: 500px;
  background-image: url(${(props) => props.backgroundImageSrc});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBoxImage = styled.img<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => (props.width ? props.width : "300px")};
  margin: ${(props) => props.margin};
`;

function ImageBox(props: IImageBoxProps) {
  const { backgroundImageSrc, imageSrc, margin, imageWidth } = props;

  return (
    <>
      {backgroundImageSrc ? (
        <ImageSection backgroundImageSrc={backgroundImageSrc}>
          <ImageBoxImage src={imageSrc} margin={margin} width={imageWidth} />
        </ImageSection>
      ) : (
        <ImageBoxImage src={imageSrc} margin={margin} width={imageWidth} />
      )}
    </>
  );
}

export default ImageBox;
