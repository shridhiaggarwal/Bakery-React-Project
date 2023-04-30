import React, { useState } from "react";
import IconButton from "../../components/IconButton";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

function ScrollToTopButton() {
  const [showScrollBtn, setshowScrollBtn] = useState<boolean>(false);

  const handleScrollTopBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.scrollY > 300 ? setshowScrollBtn(true) : setshowScrollBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtnVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {showScrollBtn && (
        <StyledIconButton onButtonClick={handleScrollTopBtn} borderRadius="50%">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </StyledIconButton>
      )}
    </>
  );
}

export default ScrollToTopButton;
