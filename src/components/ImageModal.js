import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "90vw", // Limit modal width to 90% of the viewport width
          maxHeight: "90vh", // Limit modal height to 90% of the viewport height
          overflow: "hidden", // Avoid scrollbars inside modal
          position: "relative",
          border: "none", // Remove any border
          boxShadow: "none", // Remove any box shadow
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.85)", // Optional: darken the background behind the modal
        },
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✖
      </button>

      <div style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}>
        <img
          src={imageSrc}
          alt="Selected"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain", // Ensures the image is not cropped
            maxHeight: "90vh", // Limit image size relative to modal size
            display: "block",
            margin: "auto", // Center the image
          }}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
