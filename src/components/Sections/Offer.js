import React from "react";
import "../css/Offer.css";
import purple_dot from "../../Assets/Ellipse 308.png";
import plus from "../../Assets/plus 1.png";
const Offer = () => {
  return (
    <section className="total-what-we-do">
      <div className="do-title">
        <h1>What We Offer</h1>
      </div>
      <div className="total-do-section">
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Diverse Network</h1>
          <p>
            Connect with a wide range of professionals, from early-stage
            founders to seasoned entrepreneurs, investors, and industry experts.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Knowledge Sharing</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Collaboration Opportunities</h1>
          <p>
            Find potential co-founders, mentors, or partners for your next big
            venture.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Community Support</h1>
          <p>
            Be part of a supportive ecosystem that celebrates successes and
            provides guidance through challenges.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
