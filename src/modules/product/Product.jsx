import React,{useState} from "react";
import { images } from "../../assets/images/images";
import Slider from './Slider';
import Information from "../product/Information";
import '/src/styles/Product.css'
import Faqs from "../product/Faqs";
import Video from '../product/Video'
import ProductSlider from "./ProductSlider";

function Product() {
  const [selectedOption, setSelectedOption] = useState('one-time');
  return (
    <>
      <div className="product">
        <div className="product-slider">
          <Slider></Slider>

          <div className="might-like">
            <h3>YOU MIGHT ALSO LIKE</h3>
            <div className="might-text">
              <img className="might-img" src={images.might} alt="" />
              <div className="cheese">
                <h2>Cheese variety pack</h2>
                <h2>$24.99</h2>
              </div>
            </div>
          </div>
        </div>




        <div className="product-info">


          <div className="product-rating">
            <img src={images.rating} alt="" />
            <h3 className="rating">(100 + ratings)</h3>
          </div>

          <div className="product-heading">
            <h1 className="chips-heading">CHIPS SNACK</h1>
          </div>

          <div className="product-price">
            <h1>$24.99</h1>
            <img src={images.best} alt="" />
          </div>

          <div className="product-text">
            <h3>
              Kick back and take it easy ‘cuz these are nacho average puffs.
            </h3>
          </div>

          <div className="product-button">
            <h3 className="select-text">SELECT FLAVOR</h3>
            <div className="button-product">
            <button>nacho vibes</button>
            <button>bohemian barbecue</button>
            <button>puff variety pack</button>
            <button>churro & mexican street </button>
            </div>
          </div>

          <div className="product-delivery">
          <div className="pricing-container">
      <div className="option">
        <label>
          <input
            type="radio"
            value="one-time"
            checked={selectedOption === 'one-time'}
            onChange={() => setSelectedOption('one-time')}
          />
          <span className="radio-label">one-time purchase</span>
          <span className="price">$24.99</span>
        </label>
      </div>
      <div className="option">
        <label>
          <input
            type="radio"
            value="subscribe"
            checked={selectedOption === 'subscribe'}
            onChange={() => setSelectedOption('subscribe')}
          />
          <span className="radio-label">subscribe & save</span>
          <span className="price old-price">$24.99</span>
          <span className="price discounted">$21.99</span>
        </label>
      </div>
      <div className="delivery-info">Delivery every 2 weeks</div>
    </div>
            <button className="add-to">ADD TO CART</button>
          </div>

          <div className="product-details">
            <img src={images.leave} alt="" />
            <img src={images.box} alt="" />
            <img src={images.plant} alt="" />
            <img src={images.eco} alt="" />
          </div>
          
        </div>
      </div>
      <div className="image-cut">
        <img src={images.orangecut} alt="" />
      </div>
      <div>
        <Information></Information>
      </div>
      <div className="vid">
        <Video></Video>
      </div>
       <div>
        <Faqs></Faqs>
       </div>
       <div>
        <img className='yellowcut' src={images.yellowcut} alt="" />
        
       </div>
       <div >
        <ProductSlider></ProductSlider>

       </div>

    
       

    </>
  );
}

export default Product;
