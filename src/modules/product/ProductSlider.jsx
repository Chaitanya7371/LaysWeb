import React from "react";
import ProductData from "../product/jasonData/ProductData.json";
import "/src/styles/ProductSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="card-slider">
      <h1>RELATED PRODUCTS</h1>
      <div className="slide-container">
        <Slider {...settings}>
          {ProductData.map((item) => (
            <div key={item.id} className="card-container">
              <div className="card-image">
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
