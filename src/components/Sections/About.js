import React, { useEffect, useRef } from "react";
import "../css/about.css";
import { FaArrowRightLong } from "react-icons/fa6";
import second_bg from "../../Assets/second_bg.png";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleClick = (e) => {
    e.target.style.animation = "buttonClick 300ms ease-out";
    setTimeout(() => {
      e.target.style.animation = "";
    }, 300);
  };

  return (
    <section id="about" className="total-about">
      <div ref={aboutRef} className="about-slide-in">
        <div className="about-left-side">
          <h3>Founders Friday</h3>
          <h1>What Happens At Founders Friday</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. 
          </p>

          <button
            className="learn-more-btn more-btn-more"
            onClick={handleClick}
          >
            Learn More <FaArrowRightLong className="more-btn" />
          </button>
        </div>
        <div className="about-righ-side">
          <img src={second_bg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
