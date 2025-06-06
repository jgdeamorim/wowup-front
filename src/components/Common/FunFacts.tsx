"use client";
  
import React from "react";

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="funfacts-inner">
        <div className="row">
          <div
            className="col-lg-3 col-6 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <div className="single-funfacts funfact-style-two">
              <i className="bx bx-list-check"></i>
              <h3>
                850
                <span className="sign-icon">+</span>
              </h3>
              <p>Completed Projects</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-6 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <div className="single-funfacts funfact-style-two">
              <i className="bx bx-smile"></i>
              <h3>
                850
                <span className="sign-icon">+</span>
              </h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-6 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="single-funfacts funfact-style-two">
              <i className="bx bx-grid-small"></i>
              <h3>
                120
                <span className="sign-icon">+</span>
              </h3>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-6 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <div className="single-funfacts funfact-style-two">
              <i className="bx bxs-award"></i>
              <h3>
                50
                <span className="sign-icon">+</span>
              </h3>
              <p>Winning Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
