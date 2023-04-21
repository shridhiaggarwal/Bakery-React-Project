import React from "react";
import IconButton from "../IconButton";
import styled from "styled-components";

interface IModalProps {
  modalId: string;
  modalContent: any;
  onClose: () => void;
  showBackdrop?: boolean;
}

function Modal(props: IModalProps) {
  const { modalId, modalContent, onClose, showBackdrop = true } = props;

  return (
    <>
      {showBackdrop && (
        <div className="modal-backdrop show" onClick={onClose}></div>
      )}
      <div className="modal fade" id={modalId} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <button type="button" className="close" data-dismiss="modal">
              &times;
            </button> */}
            <IconButton
              data-dismiss="modal"
              onButtonClick={onClose}
              marginTop="8px"
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </IconButton>
            <div className="modal-body">{modalContent}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
