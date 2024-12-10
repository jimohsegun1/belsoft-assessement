import React from "react";
import "../css/testimonials.css";
import "../css/what_we_do.css";
import frame1 from "../../Assets/Frame1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ArrowBack from "../../Assets/carousel back.png";
import ArrowFront from "../../Assets/carousel next.png";
import profile from "../../Assets/profile.png";
const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="total-test">
        <section className="left-test">
          <div>
            <img src={frame1} alt="" />
          </div>

          <div>
            <h2>At Founder’s Friday, Every Friday Is a Learning Experience!</h2>
            <p>
              Join us in our mission to transform ideas into impact and shape
              the future of Nigeria’s startup landscape.
            </p>
            <button className="Register-btn">
              Register <FaArrowRightLong className="arrow-right" />
            </button>
          </div>
        </section>
        <section className="down-test">
          <div>
            <h1>What Do Our Attendees Have To Say?</h1> <br/>
            <p>Well See For Yourself!</p>
          </div>

          <div className="sub-div-test">
            <img src={ArrowBack} alt="" />
            <img src={ArrowFront} alt="" />
          </div>
        </section>
      </section>
      <section className="total-profile-detials">
        <div className="profile-detials">
          <img src={profile} alt="" />
          <h1>Mr Belba Ngoy</h1>
          <p>
            Always a remarkable experience <br />
            for my team and myself
          </p>
        </div>
        <div className="profile-detials">
          <img src={profile} alt="" />
          <h1>Mr Belba Ngoy</h1>
          <p>
            Always a remarkable experience <br />
            for my team and myself
          </p>
        </div>
        <div className="profile-detials">
          <img src={profile} alt="" />
          <h1>Mr Belba Ngoy</h1>
          <p>
            Always a remarkable experience <br />
            for my team and myself
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
