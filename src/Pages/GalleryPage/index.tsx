import React from "react";
import Images from "../../components/Images";
import Modal from "../../components/Modal";
import styled from "styled-components";
import Typography from "../../components/Typography";
import GalleryImagesGrid, { IImageProps } from "./containers/GalleryImagesGrid";
import ModalContent from "./containers/ImageModalContent";

const imagesArray = [
  {
    id: 1,
    url: Images.GALLERY1,
    caption: "Sweet and delicious, just like you.",
  },
  {
    id: 2,
    url: Images.GALLERY2,
    caption: "Indulge yourself with our mouthwatering treats.",
  },
  {
    id: 3,
    url: Images.GALLERY3,
    caption: "Happiness is a warm pastry.",
  },
  {
    id: 4,
    url: Images.GALLERY4,
    caption: "Baking is love made visible.",
  },
  {
    id: 5,
    url: Images.GALLERY5,
    caption: "Happy birthday to the sweetest person we know!",
  },
  {
    id: 6,
    url: Images.GALLERY6,
    caption: "Treat yourself, you deserve it.",
  },
  {
    id: 7,
    url: Images.GALLERY7,
    caption: "Sweeten up your day with our treats.",
  },
  {
    id: 8,
    url: Images.GALLERY8,
    caption: "Sometimes, all you need is a cupcake.",
  },
  {
    id: 9,
    url: Images.GALLERY9,
    caption: "Age is just a number. Cake is eternal.",
  },
];

const GallerySection = styled.section`
  padding: 80px;
  position: relative;
  @media only screen and (max-width: 992px) {
    padding: 40px 20px;
  }
`;

function GalleryPage() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<IImageProps | null>(null);

  const handleImageClick = (image: IImageProps) => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedImage(null);
    const bodyElement = document.getElementsByTagName("body")[0];
    const navElement = document.getElementsByTagName("nav")[0];
    if (navElement) {
      bodyElement.classList.remove("modal-open");
      bodyElement.style.paddingRight = "0px";
      navElement.style.paddingRight = "16px";
    }
  };

  return (
    <GallerySection>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 4rem 0"
        textAlign="center"
      >
        Our Gallery
      </Typography>
      <GalleryImagesGrid
        imagesArray={imagesArray}
        onImageClick={handleImageClick}
        dataToggle="modal"
        dataTarget="#galleryModal"
        dataBackdrop={false}
      />
      {modalOpen && selectedImage && (
        <>
          <Modal
            modalId="galleryModal"
            modalContent={<ModalContent selectedImage={selectedImage} />}
            onClose={handleModalClose}
            showBackdrop={true}
          />
        </>
      )}
    </GallerySection>
  );
}

export default GalleryPage;
