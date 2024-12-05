import React, { useState } from "react";
import "./ImageGallery.css";
import ImageModal from "./ImageModal";

const importImages = () => {
  const images = require.context(
    "../assets/images",
    false,
    /\.(png|jpe?g|svg)$/
  );
  return images.keys().map((key, index) => ({
    id: index + 1,
    src: images(key),
  }));
};

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Call importImages to get the array of images
  const images = importImages();

  const openModal = (src) => {
    setCurrentImage(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const theme = document.documentElement.getAttribute("data-theme"); // Get the theme from root

  return (
    <div
      className={`gallery-container ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      {images.map((image) => (
        <div
          className="gallery-item"
          key={image.id}
          onClick={() => openModal(image.src)}
        >
          <img src={image.src} alt={`Gallery ${image.id}`} loading="lazy" />
        </div>
      ))}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageSrc={currentImage}
      />
    </div>
  );
};

export default ImageGallery;
