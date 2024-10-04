import React from "react";
import "/src/styles/Footer.css";
import { Link } from "react-router-dom";
import { PiCopyrightLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { images } from "../../assets/images/images";

function FooterContact() {
  return (
    <>
      <div className="contactUs">
        <div className="contactUs-firstBlock">
          <button className="contactUs-sixthdiv-firstBlock-button">
            <img
              className="contactUs-firstBlock-button-img"
              src={images.vince}
            />{" "}
          </button>
          <p className="contactUs-firstBlock-para">
            {" "}
            Email:
            <Link className="contactUs-firstBlock-paraLink" to="">
              info@ecomposershop.com
            </Link>
          </p>
          <p className="contactUs--firstBlock-para">
            {" "}
            Phone:
            <Link className="contactUs-firstBlock-paraLink" to="">
              {" "}
              (212) 555-1234
            </Link>
          </p>
          <p className="contactUs-firstBlock-para1">
            Sign up for sale, new arrivals & more
          </p>
          <span className="contactUs-firstBlock-LoginAddress">
            <img
              className="contactUs-firstBlock-emaiIcon"
              src={<TfiEmail />}
              alt="email-icon"
            />
            <input
              className="contactUs-firstBlock-EmailInputbox"
              type="email"
              placeholder="Email Address"
            />
            <button className="contactUs-firstBlock-LoginAddress-button">
              Sign Up
            </button>
          </span>
        </div>

        <div className="contactUs-secondBlock">
          <h3 className="contactUs-secondBlock-heading"> About Us</h3>
          <p>
            <Link className="contactUs-secondBlock-link">About Us</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Careers</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Blog</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Affiliate</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Contact Us</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Terms of use</Link>
          </p>
        </div>

        <div className="contactUs-thirdBlock">
          <h3 className="contactUs-secondBlock-heading"> Resource</h3>
          <p>
            <Link className="contactUs-secondBlock-link"> Return policy</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">My Account</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Find a Store</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Legal & Privacy</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Contact</Link>
          </p>
        </div>

        <div className="contactUs-fourthBlock">
          <h3 className="contactUs-secondBlock-heading"> Information</h3>
          <p>
            <Link className="contactUs-secondBlock-link">Our Story</Link>
          </p>
          <p>
            <Link className="contactUs--secondBlock-link">Visit Our Store</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Contact Us</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Legal & Privacy</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Account</Link>
          </p>
        </div>

        <div className="contactUs-fifthBlock">
          <h3 className="contactUs-secondBlock-heading">Help</h3>
          <p>
            <Link className="contactUs-secondBlock-link">FAQ</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Terms of Use</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Privacy Policy</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Cookie Policy</Link>
          </p>
          <p>
            <Link className="contactUs-secondBlock-link">Sitemap</Link>
          </p>
        </div>
      </div>

      <div className="contactUs-seventhdiv">
        <p>© 2024 EComposer Store. All Rights Reserved. </p>
        <img
          className="contactUs-seventhdiv-img"
          src={<PiCopyrightLight />}
          alt="copyright"
        />
      </div>
    </>
  );
}

export default FooterContact;
