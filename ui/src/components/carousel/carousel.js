import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./carousel.css";

function SimpleCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clear the timer when the component is unmounted
  }, [currentIndex]); // Effect dependency ensures timer is reset if index changes from another source

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container rounded-md relative w-full md:w-3/4 lg:w-1/2 xl:w-2/3 h-full mx-auto">
      <img
        src={images[currentIndex]}
        alt="carousel item"
        className="carousel-image w-full h-56 md:h-64 lg:h-96"
      />

      <IconButton
        className="carousel-btn absolute top-1/2 -translate-y-1/2 left-2 lg:left-4"
        onClick={prevImage}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>

      <IconButton
        className="carousel-btn absolute top-1/2 -translate-y-1/2 right-2 lg:right-4"
        onClick={nextImage}
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SimpleCarousel;
