import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";

export interface IImageProps {
  url: string;
  caption?: string;
}

interface IImageModalContentProps {
  selectedImage: IImageProps;
}

const ModalImage = styled.img`
  max-height: 400px;
  width: 100%;
`;

const Caption = styled(Typography)`
  display: block;
  width: 100%;
`;

function ImageModalContent(props: IImageModalContentProps) {
  const { selectedImage } = props;

  return (
    <>
      <ModalImage src={selectedImage.url} alt={selectedImage.caption} />
      <Caption
        variant="caption"
        fontWeight="bold"
        padding="16px 0 0 0"
        textAlign="center"
      >
        {selectedImage.caption}
      </Caption>
    </>
  );
}

export default ImageModalContent;
