import React, { useState, useEffect } from "react";
import "/src/styles/Slider.css";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/src/modules/product/jasonData/ProductData.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide}>
        <GrCaretPrevious />
      </button>

      {images.length > 0 && (
        <div className="slider">
          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].alt}
            className="slider-image"
          />
        </div>
      )}

      <button onClick={nextSlide}>
        <GrCaretNext />
      </button>
    </div>
  );
};

export default Slider;
