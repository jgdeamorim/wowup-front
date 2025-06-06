"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceLeftImageStyle: React.FC = () => {
  return (
    <>
      <section className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-image">
              <div className="image">
                <Image
                  src="/images/services/service4.png"
                  alt="image"
                  width={852}
                  height={580}
                />
              </div>
            </div>

            <div className="services-content it-service-content">
              <div className="content">
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={50}
                    height={35}
                  />
                </div>
                <h2>Digital Marketing</h2>
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
                      SEO Marketing
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Email Marketing
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Facebook Marketing
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Data Scraping
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Social Marketing
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Youtube Marketing
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLeftImageStyle;
