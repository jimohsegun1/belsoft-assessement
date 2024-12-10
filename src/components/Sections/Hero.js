import React, { useEffect, useState, useRef } from "react";
import "./../css/hero.css";
import "./../css/Navbar.css";
import Right_Arrow from "../../Assets/Right_arrow.png";
import img1 from "../../Assets/Ellipse 3.png";
import img2 from "../../Assets/Ellipse 1.png";
import img3 from "../../Assets/Ellipse 2.png";
import img4 from "../../Assets/Ellipse 4.png";
import img5 from "../../Assets/Ellipse 5.png";
import Arrow from "../../Assets/BoxArrowUpRight.png";
import hero_img from "../../Assets/hero_right_side.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  const handleButtonClick = (e) => {
    e.target.style.animation = "buttonClick 300ms ease-out";
    setTimeout(() => {
      e.target.style.animation = "";
    }, 300);
  };

  return (
    <section className="total-hero">
      <div
        ref={heroRef}
        className={`hero slide-in ${isVisible ? "visible" : ""}`}
      >
        <p>
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </p>
        <h1>Connect, Collaborate, Innovate!</h1>
        <h2>
          Every last Friday of the month, we bring together the brightest minds
          in our local tech ecosystem. Whether you're a seasoned entrepreneur or
          just starting your journey, Founder's Friday is your launchpad for new
          ideas, valuable connections, and game-changing opportunities.
        </h2>
        <button className="cta-btn " onClick={handleButtonClick}>
          Register For Our Next Event <img src={Right_Arrow} alt="" />
        </button>
        <small>Join Us for our next meetup on the 26th of July 2024</small>

        <div className="sponsor-img">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        <h6>
          Become a collaborator today <img src={Arrow} alt="" />
        </h6>
      </div>
      <div className={`Right-side slide-in ${isVisible ? "visible" : ""}`}>
        <img src={hero_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
