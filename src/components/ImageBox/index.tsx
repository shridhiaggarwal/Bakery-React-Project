import React from "react";
import styled from "styled-components";

interface IImageBoxProps {
  backgroundImageSrc?: string;
  imageSrc?: string;
  margin?: string;
}

const ImageSection = styled.div<{
  backgroundImageSrc?: string;
  margin?: string;
}>`
  height: 100%;
  width: 500px;
  background-image: url(${(props) => props.backgroundImageSrc});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
`;

const ImageBoxImage = styled.img<{
  margin?: string;
}>`
  width: 300px;
  margin: ${(props) => props.margin};
`;

function ImageBox(props: IImageBoxProps) {
  const { backgroundImageSrc, imageSrc, margin } = props;

  return (
    <>
      {backgroundImageSrc ? (
        <ImageSection backgroundImageSrc={backgroundImageSrc} margin={margin}>
          <ImageBoxImage src={imageSrc} />
        </ImageSection>
      ) : (
        <ImageBoxImage src={imageSrc} margin={margin} />
      )}
    </>
  );
}

export default ImageBox;
