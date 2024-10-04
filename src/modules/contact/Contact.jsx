import React from "react";
import "/src/styles/Contact.css";
import { images } from "/src/assets/images/images.js";
import Helpdesk from "./Helpdesk";
import { TbArrowNarrowRight } from "react-icons/tb";
import Chats from "../contact/Chats";
import Question from "./Question";
import FooterContact from "./FooterContact";
function Contact() {
  return (
    <>
      <div className="help-center">
        <div className="help-text">
          <h1>HELP CENTER</h1>
          <h3>Let us know how we may help you?</h3>
        </div>
        <div className="help-input">
          <input type="text" placeholder="Search for answer...." />
        </div>
      </div>

      <div className="order-return">
        <div className="order-track">
          <img src={images.location} alt="" />
          <h2>Order Tracking</h2>
          <h4>Log in to check the status of your order</h4>
          <button>
            {" "}
            Track your order <TbArrowNarrowRight className="arrow" />
          </button>
        </div>
        <div className="return-exchange">
          <img src="/src/assets/images/return.png" alt="" />
          <h2>Return & Exchange</h2>
          <h4>We make it easy to return and exchange styles.</h4>
          <button>
            {" "}
            Track your order <TbArrowNarrowRight />
          </button>
        </div>
      </div>
      <div>
        <Helpdesk></Helpdesk>
      </div>
      <div className="popular-ques">
        <Question></Question>
      </div>
      <div>
        <Chats></Chats>
      </div>
      <div>
        <FooterContact />
      </div>
    </>
  );
}

export default Contact;
