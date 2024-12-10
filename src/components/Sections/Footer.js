import React from "react";
import "../css/footer.css";
import footer_img from "../../Assets/footer_logo.svg";
import Right_Arrow from "../../Assets/Right_arrow.png";

import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";

import twitter from "../../Assets/twitter.png";

const Footer = () => {
  const handleButtonClick = (e) => {
    e.target.style.animation = "buttonClick 300ms ease-out";
    setTimeout(() => {
      e.target.style.animation = "";
    }, 300);
  };

  return (
    <section className="total-footer">
      <img src={footer_img} alt="" className="footer_logo" />
      <div className="sub-total-footer">
        <h1>Want To Be A Part Of Abuja’s Biggest Tech Community?</h1>
        <button className="footer-btn" onClick={handleButtonClick}>
          Register For Our Next Event <img src={Right_Arrow} alt="" />
        </button>
      </div>

      <hr />
      <section className="footer-social-nav">
        <div>
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
        <nav className="nav nav-footer">
          <a href="#about">Home</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </section>
    </section>
  );
};

export default Footer;
