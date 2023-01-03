import React from "react";
import Modal from "react-modal";
import { ICustomModal } from "../../../types/CustomModal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FAFAFA",
    width: "40vw",
  },
};
export const CustomModal = ({
  isOpen,
  children,
  onRequestClose,
  shouldCloseOnOverlayClick,
}: ICustomModal) => {
  return (
    <div>
      <Modal
        contentLabel="onRequestClose Example"
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        isOpen={isOpen}
        style={customStyles}
      >
        {children}
      </Modal>
    </div>
  );
};
