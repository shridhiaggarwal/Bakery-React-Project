import React from "react";
import styled from "styled-components";

interface IImageBoxProps {
  className?: string;
  backgroundImageSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
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
  const { className, backgroundImageSrc, imageSrc, imageAlt, margin, imageWidth } = props;

  return (
    <>
      {backgroundImageSrc ? (
        <ImageSection backgroundImageSrc={backgroundImageSrc} className={className}>
          <ImageBoxImage src={imageSrc} margin={margin} width={imageWidth} alt={imageAlt}/>
        </ImageSection>
      ) : (
        <ImageBoxImage className={className} src={imageSrc} margin={margin} width={imageWidth} alt={imageAlt}/>
      )}
    </>
  );
}

export default ImageBox;
