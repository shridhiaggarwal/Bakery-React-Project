import React from "react";
import Images from "../../components/Images";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import styled from "styled-components";

const imagesArray = [
  {
    id: 1,
    url: Images.SERVICE1,
    description: "Description for Image 1",
  },
  {
    id: 2,
    url: Images.SERVICE1,
    description: "Description for Image 2",
  },
  {
    id: 3,
    url: Images.SERVICE1,
    description: "Description for Image 3",
  },
];

const GallerySection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

function ModalContent(props: any) {
  return <></>;
}

function GalleryPage() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const handleImageClick = (imageId: number) => {
    setModalOpen(true);
    setSelectedImage(imageId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <GallerySection>
      <div className="container-fluid">
        <div className="row">
          {imagesArray.map((image) => {
            return (
              <img
                key={image.id}
                src={image.url}
                alt={image.description}
                onClick={() => handleImageClick(image.id)}
                data-toggle="modal"
                data-target="#galleryModal"
                data-backdrop="false"
              />
            );
          })}
        </div>
        {modalOpen && (
          <>
            <Modal
              modalId="galleryModal"
              modalContent={<>hello</>}
              onClose={handleModalClose}
              showBackdrop={true}
            />
          </>
        )}
      </div>
    </GallerySection>
  );
}

export default GalleryPage;
