import React from "react";
import "../css/faqs.css";
import dropdown from "../../Assets/dropdown.png";
const FAQs = () => {
  return (
    <section className="total-faqs">
      <h1>FAQs</h1>
      <div className="faqs">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi elit.
            <img src={dropdown} alt="" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
