import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/Typography";
import { IImageProps } from "../GalleryImagesGrid";

interface IModalContentProps {
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

function ModalContent(props: IModalContentProps) {
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

export default ModalContent;
