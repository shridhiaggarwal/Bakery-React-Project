import React from "react";
import styled from "styled-components";
import MenuCard, { IMenuCardProps } from "../MenuCard";
import Modal from "../../../../components/Modal";
import ImageModalContent, { IImageProps } from "../../../../containers/ImageModalContent";

export interface IMenuCardsContainerProps {
  menuItems: Array<IMenuCardProps>;
}

const MenuContainer = styled.div`
  .container-fluid {
    padding: 0px;
  }
`;

function MenuCardsContainer(props: IMenuCardsContainerProps) {
  const { menuItems } = props;
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<IImageProps | null>(
    null
  );

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
    <MenuContainer>
      <div className="container-fluid">
        <div className="row">
          {menuItems.map((menuItem: IMenuCardProps, index: number) => (
            <div key={index} className="col-md-6">
              <MenuCard
                name={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
                imageSrc={menuItem.imageSrc}
                onImageClick={handleImageClick}
                dataToggle="modal"
                dataTarget="#menuModal"
                dataBackdrop={false}
              />
            </div>
          ))}
        </div>
      </div>
      {modalOpen && selectedImage && (
        <>
          <Modal
            modalId="menuModal"
            modalContent={<ImageModalContent selectedImage={selectedImage} />}
            onClose={handleModalClose}
            showBackdrop={true}
          />
        </>
      )}
    </MenuContainer>
  );
}

export default MenuCardsContainer;
