import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { IImageProps } from "../../../../containers/ImageModalContent";

interface IGalleyImagesGridProps {
  imagesArray: Array<IImageProps>;
  onImageClick?: (value: IImageProps) => void;
  dataToggle?: string;
  dataTarget?: string;
  dataBackdrop?: boolean;
}

const StyledMasonryContainer = styled.div`
  .my-masonry-grid {
    display: flex;
    width: auto;
    grid-gap: 16px;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 16px;
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  border: 4px dotted white;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    border: 4px dotted #da5162;
  }
`;

function GalleryImagesGrid(props: IGalleyImagesGridProps) {
  const { imagesArray, onImageClick, dataToggle, dataTarget, dataBackdrop } =
    props;

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    380: 1,
  };

  const handleImageClick = (image: IImageProps) => {
    onImageClick && onImageClick(image);
  };

  return (
    <StyledMasonryContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesArray.map((image, key) => {
          return (
            <div key={key}>
              <ImageItem
                src={image.url}
                alt={image.caption}
                onClick={() => handleImageClick(image)}
                data-toggle={dataToggle}
                data-target={dataTarget}
                data-backdrop={dataBackdrop}
                className="animate__animated animate__fadeInLeft"
              />
            </div>
          );
        })}
      </Masonry>
    </StyledMasonryContainer>
  );
}

export default GalleryImagesGrid;
