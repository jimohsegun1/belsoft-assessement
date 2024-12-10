import React from "react";
import "../css/sponsor.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Sponsor = () => {
  return (
    <section id="contact" className="total-sponsor">
      <section className="sponsor-up-left">
        <div>
          <h3>Sponsor The Next Friday</h3>
          <h1>Why Sponsor Founders Friday?</h1>
        </div>
      </section>
      <section className="sponsor-up-right">
        <section className="sponsor-container">
          <div>
            <h1>Networking Opportunities</h1>
            <p>
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
          <div>
            <h1>Networking Opportunities</h1>
            <p>
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
          <div>
            <h1>Networking Opportunities</h1>
            <p>
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
          <div>
            <h1>Networking Opportunities</h1>
            <p>
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
        </section>
        <section className="sponsor-container-right">
          <h1>How To Sponsor</h1>
          <i>Ready to Make an Impact?</i>
          <h6>
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday
          </h6>
          <form>
            <section className="form-column">
              <section>
                <label>Name</label>
                <input type="text" placeholder="Full name" />
              </section>
              <section>
                <label>Company(optional)</label>
                <input type="text" placeholder="Company name" />
              </section>
            </section>
            <section className="form-column">
              <section>
                <label>Email</label>
                <input type="email" placeholder="Email address" />
              </section>
              <section>
                <label>Company</label>
                <input type="number" placeholder="Phone number" />
              </section>
            </section>
          </form>
          <button>
            Sponsor <FaArrowRightLong className="more-btn" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default Sponsor;
