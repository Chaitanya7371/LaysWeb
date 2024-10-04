import React from "react";
import "/src/styles/Helpdesk.css";
import { images } from "../../assets/images/images";
function Helpdesk() {
  return (
    <div className="help-desk">
      <h1>Browse our help desk</h1>
      <div className="help-container">
        <div className="help-box">
          <img src={images.clothes} alt="" />
          <h2>Size Guide</h2>
          <p>Ensure your customers get the right fit</p>
          <h3>view more</h3>
        </div>
        <div className="help-box">
          <img src={images.hand} alt="" />
          <h2>Loyalty Program</h2>
          <p>Offer exclusive rewards</p>
          <h3>view more</h3>
        </div>
        <div className="help-box">
          <img src={images.boxpack} alt="" />
          <h2>Order & Shipping</h2>
          <p>Looking for your order status</p>
          <h3>view more</h3>
        </div>
        <div className="help-box">
          <img src={images.card} alt="" />
          <h2>Payment & Gift cards</h2>
          <p>Wonder of what payment we accept?</p>
          <h3>view more</h3>
        </div>
        <div className="help-box">
          <img src={images.coupan} alt="" />
          <h2>Discount Codes</h2>
          <p>Have a discount you like to use?</p>
          <h3>view more</h3>
        </div>
        <div className="help-box">
          <img src={images.store} alt="" />
          <h2>Store Location</h2>
          <p>Want to find a store near you?</p>
          <h3>view more</h3>
        </div>
      </div>
    </div>
  );
}

export default Helpdesk;
