import React from "react";
import "../css/what_we_do.css";
import offer_img from "../../Assets/img2.png";
import line1 from "../../Assets/Line 1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import money_bag from "../../Assets/Money_Bag.png";
const WHATWEDO = () => {
  return (
    <section className="total-offer">
      <div className="offer-left">
        <img src={offer_img} alt="" />
      </div>
      <section className="total-offer-right">
        <div className="line-container">
          <img src={line1} alt="" className="line" />
        </div>
        <div className="offer-right">
          <h1>Who Are We?</h1>
          <p>
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>
          <div className="Register-Donate">
            <button className="Register-btn">
              Register <FaArrowRightLong className="arrow-right" />
            </button>

            <button className="Donate-btn">
              Donate <img src={money_bag} alt="" />
            </button>
          </div>
          <h6>
            Founder's Friday is more than just a meetup — it's a movement.
          </h6>
        </div>
      </section>
    </section>
  );
};

export default WHATWEDO;
