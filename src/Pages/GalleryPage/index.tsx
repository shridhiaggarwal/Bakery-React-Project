import React from "react";
import Images from "../../components/Images";
import Modal from "../../components/Modal";
import styled from "styled-components";
import Typography from "../../components/Typography";
import GalleryImagesGrid from "./containers/GalleryImagesGrid";
import ImageModalContent, { IImageProps } from "../../containers/ImageModalContent";

const imagesArray = [
  {
    url: Images.GALLERY1,
    caption: "Sweet and delicious, just like you.",
  },
  {
    url: Images.GALLERY2,
    caption: "Indulge yourself with our mouthwatering treats.",
  },
  {
    url: Images.GALLERY3,
    caption: "Happiness is a warm pastry.",
  },
  {
    url: Images.GALLERY4,
    caption: "Baking is love made visible.",
  },
  {
    url: Images.GALLERY5,
    caption: "Happy birthday to the sweetest person we know!",
  },
  {
    url: Images.GALLERY6,
    caption: "Treat yourself, you deserve it.",
  },
  {
    url: Images.GALLERY7,
    caption: "Sweeten up your day with our treats.",
  },
  {
    url: Images.GALLERY8,
    caption: "Sometimes, all you need is a cupcake.",
  },
  {
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
    if (bodyElement) {
      bodyElement.classList.remove("modal-open");
      bodyElement.style.paddingRight = "0px";
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            modalContent={<ImageModalContent selectedImage={selectedImage} />}
            onClose={handleModalClose}
            showBackdrop={true}
          />
        </>
      )}
    </GallerySection>
  );
}

export default GalleryPage;
