"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceRightImageStyle: React.FC = () => {
  return (
    <>
      <section className="services-area bg-right-shape ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-content it-service-content">
              <div className="content left-content">
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={50}
                    height={35}
                  />
                </div>

                <h2>Web & Mobile Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Responsive Design
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      UI / UX Design
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Mobile App Development
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Laravel Web Development
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      React Web Development
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Angular Web Development
                    </div>
                  </div>
                </div>

                <Link href="/services/details" className="default-btn">
                  <i className="bx bxs-spreadsheet"></i>
                  Learn More
                  <span></span>
                </Link>
              </div>
            </div>

            <div className="services-image">
              <div className="image">
                <Image
                  src="/images/services/service1.png"
                  alt="image"
                  width={770}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceRightImageStyle;
