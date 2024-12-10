import React, { useState } from "react";
import "../css/events.css";
import logo_img from "../../Assets/big_logo.png";
import connecting_img from "../../Assets/connecting_img.png";
import ArrowRight from "../../Assets/ArrowRight (1).png";
import "../css/Navbar.css";
const Events = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <>
      <section className="background">
        <section className="total-event">
          <section className="Event-left">
            <h3>Founders Friday is coming to</h3>
            <div className="States">
              <span>Abuja</span>
              <span>Kaduna</span>
              <span>Kano</span>
              <span>Abuja</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. 
            </p>
          </section>
          <section className="Event-right">
            <img src={logo_img} alt="" />
          </section>
        </section>
      </section>
      <section className="Additional-event">
        <div>
          <h1>Register And Be Part of Our Community</h1>
          <p>
            Join our community of over 1000+ founders, developers, and tech
            junkies in general. <br/> Be inspired by people who live to inspire!
          </p>
        </div>
        <div>
          <img src={connecting_img} alt="" />
        </div>
        <button
          className={`register-btn ${isAnimating ? "active" : ""}`}
          onClick={handleButtonClick}
        >
          Register <img src={ArrowRight} alt="Arrow" />
        </button>
      </section>
    </>
  );
};

export default Events;
