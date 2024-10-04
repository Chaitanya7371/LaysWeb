import React from "react";
import { images } from "../../assets/images/images";
import "/src/styles/Chats.css";
function Chats() {
  return (
    <div className="question">
      <h1>Any other questions?</h1>
      <p>
        We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
        Weekends: 6am to 6pm PT.
      </p>

      <div className="ques-box">
        <div className="box">
          <img src={images.call} alt="" />
          <h2>Call</h2>
          <h3>012-345-6789</h3>
        </div>
        <div className="box">
          <img src={images.mail} alt="" />
          <h2>Email</h2>
          <h3>Contact Us</h3>
        </div>
        <div className="box">
          <img src={images.callcenter} alt="" />
          <h2>Chat</h2>
          <h3>Chat Now</h3>
        </div>
        <div className="box">
          <img src={images.message} alt="" />
          <h2>Message</h2>
          <h3>Support Now</h3>
        </div>
      </div>
    </div>
  );
}

export default Chats;
