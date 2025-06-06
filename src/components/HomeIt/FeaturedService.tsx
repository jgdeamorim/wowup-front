"use client";
  
import React from "react";
import Link from "next/link";

const FeaturedService: React.FC = () => {
  return (
    <>
      <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-features-card tx-center">
                <i className="bx bx-conversation"></i>
                <h3>
                  <Link href="/services/details">
                    IT Consultancy
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-features-card tx-center">
                <i className="bx bx-laptop"></i>
                <h3>
                  <Link href="/services/details">
                    Web Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-features-card tx-center">
                <i className="bx bxs-badge-check"></i>
                <h3>
                  <Link href="/services/details">
                    IT Solutions
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-features-card tx-center">
                <i className="bx bxs-megaphone"></i>
                <h3>
                  <Link href="/services/details">
                    Digital Marketing
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
